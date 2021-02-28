import { useState, useReducer, useEffect } from "react";
import { Header, Softkeys } from "./components";
import Content from "./containers/content"
import * as u from "./utils";

const App = () => {
  const [audio] = useState(u.getAudio());

  const[state, dispatch] = useReducer(u.reducer, {
    status: u.Statuses.RGS,
    me: "",
    contact: "",
    message: ""
  });

  return (
    <>
      <Header title={u.getHeaderTitle(state.status)} />
      <Content state={state} />
      <Softkeys {...u.getSoftKeyProps(state.status)} />
    </>
  );
}

export default App;
