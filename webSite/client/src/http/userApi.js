import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (lname_, fname_, fathername_, adress, phone_num, birth_date, hiring_date, contract_expiration, position_, email,password_) => {
    const {data} = await $authHost.post('api/employee/registration',{lname_, fname_, fathername_, adress, phone_num, birth_date, hiring_date, contract_expiration, position_, email,password_})
    localStorage.setItem('token_employee', data.token)
    return jwt_decode(data.token)
}

export const Login = async (email, password_) => {
    const {data} = await $host.post('api/employee/login', {email, password_})
    localStorage.setItem('token_employee', data.token)
    return jwt_decode(data.token)
}
export const check = async () => {
    const {data} = await $authHost.get('api/employee/check', )
    localStorage.getItem('token_employee', data.token)
    return jwt_decode(data.token)
}
export const LoginPar = async (email, password_) => {
    const {data} = await $host.post('api/parent/login', {email, password_})
    localStorage.setItem('token_parent', data.token)
    return jwt_decode(data.token)
}
export const checkpar = async () => {
    const {data} = await $authHost.get('api/parent/check', )
    localStorage.getItem('token_parent', data.token)
    return jwt_decode(data.token)
}