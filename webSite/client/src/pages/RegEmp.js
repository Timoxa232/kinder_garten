import React, {useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {registration} from "../http/userApi";

const RegEMP = () =>{

    const [lname_,setLname_] = useState('')
    const [fname_,setFname_] = useState('')
    const [fathername_,setFarhername_] = useState('')
    const [adress,setAdress] = useState('')
    const [phone_num,setPhone_num] = useState('')
    const [birth_date,setBirth_date] = useState('')
    const [hiring_date,setHiring_date] = useState('')
    const [contract_expiration,setContract_expiration] = useState('')
    const [position_,setPosition_] = useState('')
    const [email,setEmail] = useState('')
    const [password_,setPassword_] = useState('')



    const signIn = async ()=>{
        const  response = await registration(lname_, fname_, fathername_, adress, phone_num, birth_date, hiring_date, contract_expiration, position_, email,password_)
        console.log(response)

    }

    return(
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 500}} className="p-5">
                <h2 className="m-auto">Реєстрація працівника</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Фамілія" value={lname_} onChange={e => setLname_(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Ім'я" value={fname_} onChange={e=>setFname_(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="По батькові" value={fathername_} onChange={e=> setFarhername_(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Адреса" value={adress} onChange={e=> setAdress(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Номер телефону" value={phone_num} onChange={e=> setPhone_num(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Дата народження" value={birth_date} onChange={e=> setBirth_date(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Дата прийому на роботу" value={hiring_date} onChange={e=> setHiring_date(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Дата закінчення контракту" value={contract_expiration} onChange={e=> setContract_expiration(e.target.value)}/>
                    <select className="form-select mt-3" aria-label="Default select example" value={position_} onChange={e=> setPosition_(e.target.value)}>
                        <option>Посада</option>
                        <option value="Викладач">Викладач</option>
                        <option value="Адміністратор">Адміністратор</option>
                    </select>
                    <Form.Control className="mt-3" placeholder="Електронна пошта" value={email} onChange={e=>setEmail(e.target.value) }/>
                    <Form.Control type="password" className="mt-3" placeholder="Пароль" value={password_} onChange={e=> setPassword_(e.target.value)}/>
                    <div className="col-md-12 text-center">
                        <Button onClick={signIn} style={{width:140}} className="mt-3" variant={"outline-primary"}>Зареєструвати</Button>
                    </div>



                </Form>
            </Card>

        </Container>
    );
};

export default RegEMP;
