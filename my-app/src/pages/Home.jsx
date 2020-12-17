import useBackgroundColor from "../hooks/useBackgroundColor";

function Home(props) {
  useBackgroundColor("#ccc");
  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
}

export default Home;
