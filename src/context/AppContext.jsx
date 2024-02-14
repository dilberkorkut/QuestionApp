import { createContext, useState } from "react";

export const appContext = createContext();

function AppContext ({children}) {
  let [counter, setCounter] = useState(1);
  let [timer, setTimer] = useState(30);

  const contextData = {
    counter,
    setCounter,
    timer,
    setTimer
  }

  return (
    <appContext.Provider value= {contextData}>{children}</appContext.Provider>
  )
}

export default AppContext;




