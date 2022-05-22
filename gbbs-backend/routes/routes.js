import express from 'express'
import { createUser, inAuthUser, login } from '../controllers/UserController.js'

const router = express.Router()

// crear un usuario
router.post('/', createUser)

router.get('/:username/:password', login)

router.get('/:token', inAuthUser)

export default router