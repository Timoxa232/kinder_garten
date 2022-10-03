const { Pool } = require('pg')
const db = require('../db')
class GroupController{

    async post(req,res){
        const {group_name,type_,fk_employee_id} = req.body
        const response = await db.query(`insert into group2_0 VALUES(DEFAULT,'${group_name}','${type_}','${fk_employee_id}')`)
        
        return res.json(response)

    }

    async get(req,res){
        const response = await db.query(`select * from group2_0`)

        return res.json(response.rows)
    }


    async put(req,res){
        const {group_id,group_name,type_,fk_employee_id} = req.body
        const response = await db.query(`update group2_0 set group_name='${group_name}',type_='${type_}',fk_employee_id='${fk_employee_id}' where group_id = '${group_id}'`)

        return res.json(response.rows)
    }

    async delete(req,res){
        const {group_name} = req.body
        const response = await db.query(`delete from group2_0 where group_name similar to 
        '${group_name}'`)

        return res.json(response)

    }
}

module.exports = new GroupController()