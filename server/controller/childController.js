const { Pool } = require('pg')
const db = require('../db')
class ChildController {
    async post(req, res) {
        const { child_lname, child_fname, child_fathername, receipt_date, child_birth_date, child_adress, medical_comment, release_date, gender, fk_group_id } = req.body
        const response = await db.query(`insert into child2_0 VALUES(DEFAULT,'${child_lname}','${child_fname}','${child_fathername}','${receipt_date}','${child_birth_date}','${child_adress}','${medical_comment}','${release_date}','${gender}','${fk_group_id}')`)

        return res.json(response)

    }

    async getbygroup(req, res) {
        const { fk_group_id } = req.body
        const response = await db.query(`select * from child2_0 where fk_group_id = '${fk_group_id}'`)

        return res.json(response.rows)
    }

    async getone(req, res) {
        const { child_id } = req.body
        const response = await db.query(`select * from child2_0 where child_id = '${child_id}'`)

        return res.json(response.rows)
    }

    async put(req, res) {
        const { child_id, child_lname, child_fname, child_fathername, receipt_date, child_birth_date, child_adress, medical_comment, release_date, gender, fk_group_id } = req.body
        const response = await db.query(`update child2_0 set child_lname ='${child_lname}',child_fname ='${child_fname}',child_fathername='${child_fathername}',receipt_date='${receipt_date}',child_birth_date='${child_birth_date}',child_adress='${child_adress}',medical_comment='${medical_comment}',release_date='${release_date}',gender='${gender}',fk_group_id='${fk_group_id}' where child_id ='${child_id}' `)

        return res.json(response)

    }


    async delete(req, res) {
        const { child_id } = req.body
        const response = await db.query(`delete from child2_0 where child_id = '${child_id}'`)

        return res.json(response)

    }

}
module.exports = new ChildController()