import { useState, useReducer } from "react";
import Header from "./components/Header/Header";
import Softkeys from "./components/Softkeys/Softkeys";
import Content from "./containers/Content"
import * as u from "./utils";

const App = () => {
  const [audio] = useState(u.getAudio());

  const[state, dispatch] = useReducer(u.reducer, {
    status: u.Statuses.RGS,
    me: "",
    contact: "",
    message: ""
  });

  const handlers = {
    onJoin(code) {
      console.log("=== onJoin ===", code);
      // dispatch({ type: u.Actions.JOIN, data: code });
    },
    onLeave() {
      console.log("=== onLeave ===");
      // dispatch({ type: u.Actions.LEAVE });
    },
    onCall() {
      console.log("=== onCall ===");
      dispatch({ type: u.Actions.CALL });
    },
    onDoCall(code) {
      console.log("=== onDoCall ===", code);
    },
    onAnswer(code) {
      console.log("=== onAnswer ===");
    },
    onDecline(code) {
      console.log("=== onDecline ===");
    }
  }

  return (
    <>
      <Header title={u.getHeaderTitle(state.status)} />
      <Content state={state} handlers={handlers} />
      <Softkeys {...u.getSoftKeyProps(state.status)} />
    </>
  );
}

export default App;
