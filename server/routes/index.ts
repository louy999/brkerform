import {Router} from 'express'
import formRoutes from './api/form.routes'
const routes = Router()
routes.use('/pro', formRoutes)
export default routes
