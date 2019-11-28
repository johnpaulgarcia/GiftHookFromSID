import React, { useContext } from "react";
import { store } from "../../store";
import { Button } from "@material-ui/core/";
import * as constants from "../../constants";

function Sidenav(props) {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  return (
    <>
      <Button onClick={() => dispatch({ type: constants.CHANGE_BG })}>
        Click to Change to Blue
      </Button>
      <div>{console.log(state)}</div>
    </>
  );
}

export default Sidenav;
