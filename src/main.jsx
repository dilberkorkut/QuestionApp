import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './context/AppContext.jsx'
import { useState } from 'react'
import Login from './component/login/Login.jsx'

const Root = () => {
    const [isAppVisible, setIsAppVisible] = useState(false);

  function buttonClicked() {
    setIsAppVisible(prev => !prev)
    const button = document.getElementById("start");
    button.style.visibility = "hidden";
  }

    const app = isAppVisible ? <App /> : <Login />;
    return (<>
        <div className='login'>
            <button onClick={buttonClicked} id='start'>
                Teste Başla
            </ button>
            {app}
        </div>
    </>
)}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <Root />
    </AppContext>
  </React.StrictMode>,
)