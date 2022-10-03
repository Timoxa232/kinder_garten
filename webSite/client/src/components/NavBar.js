import React, { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FRONT_PAGE_ROUTE, LOGIN_EMPLOYEE_ROUTE, LOGIN_PARENT_ROUTE} from '../utils/consts'
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() =>{
    const navigate = useNavigate();
  const {user,userPAR} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuthEmp(false)
        localStorage.setItem('token_employee',null)
        userPAR.setUserPAR({})
        userPAR.setIsAuthPar(false)
        localStorage.setItem('token_parent',null)
    }
  return(
<Navbar bg="dark" variant="dark">
        <Container>
          <Nav.Link style={{color:'whitesmoke'}} href={FRONT_PAGE_ROUTE}>BAMBI</Nav.Link>
          {user.isAuthEmp ?
          <Nav className="ml-auto" style={{color:'White'}}>
          <Button variant={"outline-primary"} className="me-2">Адмін панель</Button>
          <Button variant={"outline-primary"}  onClick={logOut}>Вийти</Button>
        </Nav>
        :
          <Nav className="ml-auto" style={{color:'White'}}>
              <Button variant={"outline-primary"} className="me-2" onClick={() => navigate(LOGIN_PARENT_ROUTE)}>Авторизація користувача</Button>
            <Button variant={"outline-primary"} onClick={() => navigate(LOGIN_EMPLOYEE_ROUTE)}>Авторизація працівника</Button>
          </Nav>
          }
        </Container>
      </Navbar>
  );

});

export default NavBar