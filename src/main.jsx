import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext, { appContext } from './context/AppContext.jsx'
import { useState } from 'react'
import Login from './component/login/Login.jsx'

const Root = () => {
  const {isAppVisible} = useContext(appContext);

    const app = isAppVisible ? <App /> : <Login />;
    return (<>
        {app}
    </>
)}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <Root />
    </AppContext>
  </React.StrictMode>,
)