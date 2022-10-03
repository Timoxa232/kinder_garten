const {check} = require('express-validator')
const db=require('../db')

const emailExists = check ('email').custom(async(value)=>{
    const{rows} = await db.query('select * from parent2_0 where email = $1',[value,])
    if (!rows.length){
        throw new Error('Користувача з такою поштою не існує. Будь ласка вкажіть іншу пошту.')
    }
})

module.exports = {loginValidation:[emailExists]}