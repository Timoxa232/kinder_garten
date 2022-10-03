const db = require("../db");
const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { response } = require("express");


const generateJwt = (parent_id, email, parent_type) => {
    return jwt.sign(
        { parent_id, email,parent_type },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}


class ParentController {

    async registration(req, res, next) {
        const {lname_, fname_, fathername_, birth_date,parent_type,adress,work_place,phone_num,email,password_} = req.body
        if (!phone_num || !birth_date || !lname_ || !fname_ || !fathername_ || !email || !parent_type || !password_ || !adress || !work_place) {
            return next(ApiError.badRequest('Всі поля повинні бути заповнені!'))
        }
        const hashPassword = await bcrypt.hash(password_, 12)
        const parent = await db.query(`insert into parent2_0 VALUES(DEFAULT,'${lname_}','${fname_}','${fathername_}','${birth_date}','${parent_type}', '${adress}','${work_place}','${phone_num}','${email}','${hashPassword}') `)

        return res.json(parent)

    }

    async login(req, res, next) {
        const { email, password_ } = req.body
        const parent_type = (await db.query('Select parent_type from parent2_0 where email = $1', [email])).rows[0].parent_type
        const parent = (await db.query('Select email from parent2_0 where email = $1', [email])).rows[0].email
        const parent_id = (await db.query('select parent_id from parent2_0 where email=$1', [email])).rows[0].parent_id
        let passworddb = (await db.query('Select password_ from parent2_0 where email = $1', [email])).rows[0].password_
        let comparePassword = bcrypt.compareSync(password_, passworddb)
        if (!comparePassword) {
            return next(ApiError.internal('Вказаний пароль не правильний.'))

        }

        const token = generateJwt(parent_id, parent,parent_type)
        return res.json({ token })

    }
    async check(req, res, next) {
        const token = generateJwt(req.parent_id, req.user.email,req.parent_type)
        return res.json({ token })

    }

    async get(req, res) {
        const response = await db.query(`select * from parent2_0`)

        return res.json(response.rows)
    }

    async getone(req, res) {
        const { parent_id } = req.body
        const response = await db.query(`select * from parent2_0 where parent_id = '${parent_id}'`)

        return res.json(response.rows)
    }

    async put(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new ParentController()