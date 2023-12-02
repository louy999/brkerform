import db from '../database/index'
import bcrypt from 'bcrypt'
import config from '../config'
import Form from '../types/form'

class FromModel {
	//create form
	async create(f: Form): Promise<Form> {
		try {
			//open connect with DB1
			const connect = await db.connect()
			const sql =
				'INSERT INTO form ( salesname, salesphone, developer, unit, devename, deal, img, code ) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *'
			//run query
			const result = await connect.query(sql, [
				f.salesname,
				f.salesphone,
				f.developer,
				f.unit,
				f.devename,
				f.deal,
				f.img,
				f.code,
			])
			//release connect
			connect.release()
			return result.rows[0]
		} catch (err: any) {
			throw new Error(`${err} `)
		}
	}
	//get all form
	async getAll(): Promise<Form[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from form'
			//run query
			const result = await connect.query(sql)
			//release connect
			connect.release()
			//return created form
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific form
	async getOne(id: string): Promise<Form> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from form WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created form
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find form ${id}, ${err}`)
		}
	}
	//get specific form
	async getByCode(code: string): Promise<Form> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from form WHERE code=($1)'
			//run query
			const result = await connect.query(sql, [code])
			//release connect
			connect.release()
			//return created form
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find form ${code}, ${err}`)
		}
	}
}
export default FromModel
