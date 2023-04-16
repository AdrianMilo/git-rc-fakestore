import { Router } from 'express'
import { createUser, getUser, getUsers, updateUser, deleteUser } from '../controllers/users.controllers.js'

const router = Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)
//esta data la sacar de req.body (es la info del usuario)
//Si quiero especificar una ruta especifica para aceptar peticiones sin aceptar todos los cors en general: Puedo aceptar midelwars a mis turas. El primer / es el endpoint, '' el segundo los midelwars, y el tercero '' controlador. se pone: router.get('/', cors(), getUsers)

router.put('/', updateUser)

router.delete('/', deleteUser)
// router.get('/', getUsers)

// router.get('/:id', getUser)
// //Todo lo que venga luego de la barra será id. entonces viene el desestructurador en user.controllers que dice: desestructura id que viene desde los params.

// router.post('/', createUser)
  
// router.put('/', upDateUser)

// router.delete('/', deleteUser)

export default router