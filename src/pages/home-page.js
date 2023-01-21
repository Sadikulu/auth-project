import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { logout } from "../store/auth/auth-actions";
import {
  counterDown,
  counterSet,
  counterUp,
} from "../store/counter/counter-actions";

const HomePage = () => {
  const { counterState, dispatchCounter, authState, dispatchAuth } = useStore();
  const { counter } = counterState;
  const { isUserLogin, user } = authState;

  const handleLogout = () => {
    const result = window.confirm("Are you sure to logout");
    if (!result) return;
    dispatchAuth(logout());
  };

  return (
    <div>
      <h1>
        Hello{user.firstName} {user.lastName}
      </h1>
      <h2>
        {isUserLogin ? (
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="primary" as={Link} to="/login">
            Login
          </Button>
        )}
      </h2>
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="warning"
          onClick={() => dispatchCounter(() => counterDown())}
        >
          -
        </Button>
        <Button variant="secondary" disabled>
          {counter}
        </Button>
        <Button variant="info" onClick={() => dispatchCounter(counterUp())}>
          +
        </Button>
        <Button variant="danger" onClick={() => dispatchCounter(counterSet(0))}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default HomePage;
