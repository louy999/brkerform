import {Router, Request, Response} from 'express'
import config from '../../config'
import FromModel from '../../models/form.model'
const formModel = new FromModel()

const routes = Router()
//create products
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const products = await formModel.create(req.body)
		res.json({
			status: 'success',
			data: {...products},
			message: 'products created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all products
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const products = await formModel.getAll()
		res.json({
			status: 'success',
			data: products,
			message: 'products retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
//get specific products
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const products = await formModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: products,
			message: 'products retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get code
routes.get('/code/:code', async (req: Request, res: Response, next) => {
	try {
		const products = await formModel.getByCode(
			req.params.code as unknown as string
		)
		res.json({
			status: 'success',
			data: products,
			message: 'products retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
