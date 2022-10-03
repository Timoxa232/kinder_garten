const { Pool } = require('pg')
const db = require('../db')
class DairyController {
    async post(req, res) {
        const { fk_child_id, nutrition, activity, gen_mood } = req.body
        const response = await db.query(`insert into dairy2_0 VALUES(DEFAULT,'${fk_child_id}',DEFAULT,'${nutrition}','${activity}','${gen_mood}')`)

        return res.json(response)

    }

    async getchild(req, res) {
        const { fk_child_id } = req.body
        const response = await db.query(`select * from dairy2_0 where fk_child_id = '${fk_child_id}'`)

        return res.json(response.rows)
    }

    async getchildday(req, res) {
        const { fk_child_id } = req.body
        const response = await db.query(`select * from dairy2_0 where fk_child_id = '${fk_child_id}' and date(date_) >= current_date`)

        return res.json(response.rows)
    }

    async getchildweek(req, res) {
        const { fk_child_id } = req.body
        const response = await db.query(`select * from dairy2_0 where fk_child_id = '${fk_child_id}' and date(date_) >= current_date - interval '7 day'`)

        return res.json(response.rows)
    }

    async getchildmonth(req, res) {
        const { fk_child_id } = req.body
        const response = await db.query(`select * from dairy2_0 where fk_child_id = '${fk_child_id}' and date(date_) <= current_date and date(date_) >= current_date - interval '31 day'`)

        return res.json(response.rows)
    }

    async put(req, res) {
        const { fk_child_id, nutrition, activity, gen_mood } = req.body
        const response = await db.query(`update subject2_0 set fk_child_id = '${fk_child_id}',nutrition='${nutrition}', activity = '${activity}', gen_mood ='${gen_mood}' where date(date_) = current_date`)
        return res.json(response)


    }

   

}
module.exports = new DairyController()