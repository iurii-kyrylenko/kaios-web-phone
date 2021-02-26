import { useState, useReducer, useEffect } from "react";
import { Header, Softkeys } from "./components";
import * as u from "./utils";

const App = () => {
  const [audio] = useState(u.getAudio());

  const[state, dispatch] = useReducer(u.reducer, {
    status: "Registration", 
    me: "",
    contact: "",
    message: ""
  });

  return (
    <>
      <Header title={u.getHeaderTitle(state)} />
      <Softkeys {...u.getSoftKeyProps(state)} />
    </>
  );
}

export default App;
