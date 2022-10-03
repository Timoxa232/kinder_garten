import React, {useContext} from 'react';
import {Routes,Route, Navigate} from "react-router-dom";
import {FRONT_PAGE_ROUTE} from "../utils/consts";
import {authEMPRoutes, authPARRoutes, publicRoutes} from "../routes";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const AppRouter = observer(() => {
  const {user,userPAR} = useContext(Context)
  console.log(user)
  console.log(userPAR)
    return (
        <Routes>
            {user.isAuthEmp && authEMPRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            {userPAR.isAuthPar || user.isAuthEmp && authEMPRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}  exact/>
            )}



        </Routes>
    );
});

export default AppRouter;