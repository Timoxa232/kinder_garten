const { Pool } = require('pg')
const db = require('../db')
class ScheduleController {

    async post(req,res){
        const { day_week, day_ ,time_,fk_subject_id,fk_group_id} = req.body
        const response = await db.query(`insert into schedule2_0 values('${day_week}',
            '${day_}','${time_}','${fk_subject_id}','${fk_group_id}',DEFAULT)`)

        return res.json(response)

    }

    async getgroup(req,res){
        const {fk_group_id} = req.body
        const response = await db.query(`select * from schedule2_0 where fk_group_id = 
        '${fk_group_id}'`)

        return res.json(response.rows)
    }

    async getgroupday(req,res){
        const {fk_group_id,day_week} = req.body
        const response = await db.query(`select * from schedule2_0 where fk_group_id = 
        '${fk_group_id}' and day_week = '${day_week}'`)

        return res.json(response.rows)
    }

    async put(req,res){
        
    }

    async delete(req,res){
        const {schedule_id} = req.body
        const response = await db.query(`delete from schedule2_0 where schedule_id = '${schedule_id}'`)

        return res.json(response.rows)
    }
}

module.exports = new ScheduleController()