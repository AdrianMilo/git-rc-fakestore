//Crear esquema modelo de usuario
import {model, Schema} from 'mongoose'

const UserSchema= new Schema ({
  email: {
    type: String,
    required: [true, 'El correo es obligatorio']
  },
  username: {
    type: String,
    required: [true, 'el nombre de usuario es obligarorio']
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  password: {
    type: String,
    required: [true, 'La clave es obligatoria']
  }
})
//Se valida con la base de datos si esta información es requerida o no.

export default model('User', UserSchema)
//modelo de usuario que está en la base de datos que tiene el esquema de arriba. Todos estos usuarios se vana  aguardar en el casillero User.