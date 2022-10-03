import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import tokenEmpCheck from './Storage/tokenCheck'
import tokenParCheck from "./Storage/tokenParCheck";

export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
      user: new tokenEmpCheck(),
      userPAR: new tokenParCheck()
  }}>




    <App />,


  </Context.Provider>

);