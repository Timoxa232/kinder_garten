const db = require("../db");
const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { response } = require("express");


const generateJwt = (employee_id, email, position_) => {
    return jwt.sign(
        { employee_id, email,position_ },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}


class EmployeeController {
    async registration(req, res,next) {
        const { lname_, fname_, fathername_, adress, phone_num, birth_date, hiring_date, contract_expiration, position_, email,password_ } = req.body
        if (!lname_||!fname_||!fathername_||!position_||!email||!birth_date||!contract_expiration||!password_||!adress||!phone_num||!hiring_date) {
            return next(ApiError.badRequest('Всі поля повинні бути заповнені!'))
        }
        const hashPassword = await bcrypt.hash(password_, 12)
        const employee = await db.query(`insert into employee2_0 VALUES(DEFAULT,'${lname_}','${fname_}','${fathername_}','${adress}','${phone_num}','${birth_date}','${hiring_date}','${contract_expiration}',DEFAULT,'${position_}','${email}','${hashPassword}') `)

        return res.json(employee)

    }

    async login(req, res,next) {
        const { email, password_ } = req.body
        const position_ = (await db.query('Select position_ from employee2_0 where email = $1',[email])).rows[0].position_
        const employee = (await db.query('Select email from employee2_0 where email = $1', [email])).rows[0].email
        const employee_id = (await db.query('select employee_id from employee2_0 where email=$1', [email])).rows[0].parent_id
        let passworddb = (await db.query('Select password_ from employee2_0 where email = $1', [email])).rows[0].password_
        let comparePassword = bcrypt.compareSync(password_, passworddb)
        if (!comparePassword) {
            return next(ApiError.internal('Вказаний пароль не правильний.'))

        }

        const token = generateJwt(employee_id, employee,position_)
        return res.json({ token })

    }

    async check(req, res, next) {
        const token = generateJwt(req.employee_id, req.user.email, req.position_)
        return res.json({ token })
    }

    async get(req, res) {
        const response = await db.query(`select * from employee2_0 where status = 1`)

        return res.json(response.rows)

    }
    async getfired(req, res) {
        const response = await db.query(`select * from employee2_0 where status = 0`)

        return res.json(response.rows)

    }

    async getone(req, res) {
        const {employee_id} = req.body
        const response = await db.query(`select * from employee2_0 where employee_id = '${employee_id}'`)

        return res.json(response.rows)

    }

    async put(req, res) {

    }

}

module.exports = new EmployeeController()