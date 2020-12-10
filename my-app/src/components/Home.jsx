import { connect, useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  fetchUsersFailure,
  fetchUsersSuccess,
  setLanguage,
} from "../redux/actions";

function Home(props) {
  const [users, error, isLoading] = useSelector((state) => {
    const { users, error, isLoading } = state.app;
    return [users, error, isLoading];
  });
  const [langs, activeLang] = useSelector((state) => {
    const { langs, active } = state.appLang;
    return [langs, active];
  });
  const dispatch = useDispatch();

  //   if (isLoading) {
  //     return (
  //       <div>
  //         <h1>Home is Loading...</h1>
  //       </div>
  //     );
  //   }

  let bgColor = "#fff";
  let renderData = null;
  if (isLoading) {
    bgColor = "yellow";
    renderData = <h2>System is Loading...</h2>;
  }
  if (error) {
    bgColor = "red";
    renderData = <h2>{error}</h2>;
  }
  if (users.length) {
    bgColor = "seagreen";
    renderData = <h2>Length - {users.length}</h2>;
  }

  return (
    <div>
      <h2>Home</h2>
      <h3>{activeLang}</h3>
      <div>
        {langs.map((l, index) => {
          return (
            <button
              key={`${l}-${index}`}
              onClick={() => dispatch(setLanguage(l))}
            >
              {l}
            </button>
          );
        })}
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          background: bgColor,
          minHeight: "200px",
        }}
      >
        {renderData}
      </div>
      <button onClick={() => dispatch(getUsers())}>Fetch Users</button>
      <button onClick={() => dispatch(fetchUsersSuccess(new Array(120)))}>
        Fetch Users Success
      </button>
      <button
        onClick={() =>
          dispatch(fetchUsersFailure(new Error("User loading error.").message))
        }
      >
        Fetch Users Failure
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.app.isLoading,
    error: state.app.error,
    users: state.app.users,
  };
};

const ConnectedHome = connect(mapStateToProps)(Home);

export default ConnectedHome;
