import {
    ADMIN_ROUTE,
    PARENT_ROUTE,
    EMPLOYEE_ROUTE,
    FRONT_PAGE_ROUTE,
    LOGIN_PARENT_ROUTE,
    LOGIN_EMPLOYEE_ROUTE,
    REG_PARENT_ROUTE,
    REG_EMPLOYEE_ROUTE,
    CHILD_ROUTE
} from "./utils/consts"
import AdminPanel from "./pages/AdminPanel"
import ParentPanel from "./pages/ParentPanel"
import Employee from "./pages/EmployeePanel"
import AuthPar from "./pages/AuthPar"
import FrontPage from "./pages/FrontPage"
import AuthEmp from "./pages/AuthEmp"
import RegEmp from "./pages/RegEmp"
import ChildPanel from "./pages/ChildPanel";


export const authEMPRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    }, 
    {
        path: REG_PARENT_ROUTE,
        Component: AdminPanel
    }, 
    {
        path: REG_EMPLOYEE_ROUTE,
        Component: RegEmp
    },

    {
        path: EMPLOYEE_ROUTE,
        Component: Employee
    },
]
export const authPARRoutes =[
    {
        path: PARENT_ROUTE,
        Component: ParentPanel
    },
    {
        path: CHILD_ROUTE,
        Component: ChildPanel
    }
]
export const publicRoutes = [
{
    path: FRONT_PAGE_ROUTE,
    Component: FrontPage
},
{
    path: LOGIN_EMPLOYEE_ROUTE,
    Component: AuthEmp
},
{
    path: LOGIN_PARENT_ROUTE,
    Component: AuthPar
},
]