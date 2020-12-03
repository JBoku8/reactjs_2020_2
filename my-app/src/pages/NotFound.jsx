import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div>
      <h2>Page Not Found</h2>
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;
