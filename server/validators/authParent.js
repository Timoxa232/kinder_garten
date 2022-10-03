const {check} = require('express-validator')
const db=require('../db')


//password
const password = check('password_').isLength({min:8,max:15}).withMessage('Пароль повинен бути завдовжки від 8 до 15 символів.')


//email
const email = check('email').isEmail().withMessage('Ця пошта не коректна.Будь ласка вкажіть вашу діючу пошту.')


//check if email exists
const emailExists = check('email').custom(async(value)=>{
    const{rows} = await db.query('select * from parent2_0 where email = $1',[value,])

    if (rows.length){
        throw new Error('Користувач з такою поштою вже існує. Будь ласка вкажіть іншу пошту.')
    }
})
const phoneExists = check('phone_num').custom(async(value)=>{
    const{rows}= await db.query('select * from parent2_0 where phone_num = $1',[value,])

    if (rows.length){
        throw new Error('Користувач з таким номером телефону вже існує. Будь ласка вкажіть інший номер.')
    }
})


module.exports = {registerValidation:[email,password,emailExists,phoneExists]}