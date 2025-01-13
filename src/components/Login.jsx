import React, { useReducer } from "react";

const initState = {
  loggedIn: false,
  user: null,
  token: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "logout":
      return initState;
    default:
      break;
  }
}

const AuthComponent = () => {
  const [state, dispatch] = useReducer(authReducer, initState);

  const logIn = () => {
    dispatch({
      type: "login",
      payload: {
        user: { name: "John Doe" },
        token: "token",
      },
    });
  };

  const logOut = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div>
      {state.loggedIn ? (
        <div>
          <p> Welcome {state.user.name} </p>
          <button onClick={logOut}></button>
        </div>
      ) : (
        <form onSubmit={logIn}>
          <input type="text" />
          <input type="password" />
          <button type="submit"></button>
        </form>
      )}
    </div>
  );
};