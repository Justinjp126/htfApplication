import { Router } from 'express'
import userRouter from 'routes/user.route'

const rootRouter = Router()

rootRouter.use('/user', userRouter)

export default rootRouter
