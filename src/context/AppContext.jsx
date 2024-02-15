import { useState, createContext } from "react";

export const appContext = createContext(null);

function AppContext({children}) {
    const [counter, setCounter] = useState(1);
    const [timer, setTimer] = useState(30);
    const [isAppVisible, setIsAppVisible] = useState(false);
    const [correctCounter, setCorrectCounter] = useState(0);

    const contextData = {
        counter,
        setCounter,
        timer,
        setTimer,
        isAppVisible,
        setIsAppVisible,
        correctCounter,
        setCorrectCounter
    }

    return (
        <appContext.Provider value={contextData}>{children}</appContext.Provider>
    )
}

export default AppContext;