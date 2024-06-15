import { Router } from 'express'
import * as joyasController from '../controllers/joyasControllers.js'

const router = Router()

router.get('/joyas', joyasController.findAll)
router.get('/joyas/filtros', joyasController.filterAll)
router.all('*', joyasController.notFound)

export default router
