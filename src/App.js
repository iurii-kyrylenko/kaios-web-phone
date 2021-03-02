import { useState, useReducer } from "react";
import Header from "./components/Header/Header";
import Softkeys from "./components/Softkeys/Softkeys";
import Content from "./containers/Content";
import { createPeer, callPear, answerPeer, destroyPeer } from "./peer-service";
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
      dispatch({ type: u.Actions.JOIN, data: code });
      createPeer(code, {
        open() {
          dispatch({ type: u.Actions.LISTEN });
        },
        close() {
          audio.srcObject = null;
          dispatch({ type: u.Actions.LEAVE });
        },
        call(rmCode) {
          dispatch({ type: u.Actions.IN_CALL, data: rmCode });
        },
        error(err) {
          dispatch({ type: u.Actions.ERR, data: err.message })
        }
      })
    },
    onLeave() {
      destroyPeer();
    },
    onCall() {
      dispatch({ type: u.Actions.CALL });
    },
    onDoCall(code) {
      if (u.isContactValid(code, state.me)) {
        dispatch({ type: u.Actions.DO_CALL, data: code });
        callPear(code, {
          stream(remoteStream) {
            audio.srcObject = remoteStream;
            dispatch({ type: u.Actions.CONV });
          }
        });
      } else {
        dispatch({ type: u.Actions.ERR, data: `Invalid contact: "${code}"` });
      }
    },
    onAnswer() {
      dispatch({ type: u.Actions.ANSWER });
      answerPeer({
        stream(remoteStream) {
          audio.srcObject = remoteStream;
          dispatch({ type: u.Actions.CONV });
        }
      });
    },
    onDecline() {
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
