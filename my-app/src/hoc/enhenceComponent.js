import React, { useEffect, useState } from "react";
import Title from "../components/Title";

const enhenceComponent = (Component) => {
  return function EnhencedComponent(props) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timerId = setTimeout(() => {
        setIsLoading(false);
        clearTimeout(timerId);
      }, 2000);

      return function () {
        clearTimeout(timerId);
      };
    }, []);

    if (isLoading) {
      return <Title text="Fetching Data. Please wait..." />;
    }

    return <Component {...props} />;
  };
};

export default enhenceComponent;
