import { useEffect } from "react";

function useBackgroundColor(defaultColor = "white") {
  useEffect(() => {
    document.body.style.backgroundColor = defaultColor;
    const handler = (event) => {
      if (event.key === "r") {
        document.body.style.backgroundColor = "red";
      } else if (event.key === "g") {
        document.body.style.backgroundColor = "green";
      } else {
        document.body.style.backgroundColor = defaultColor;
      }
    };

    document.addEventListener("keyup", handler);

    return () => {
      document.removeEventListener("keyup", handler);
      document.body.style.backgroundColor = defaultColor;
    };
  }, [defaultColor]);
}

export default useBackgroundColor;
