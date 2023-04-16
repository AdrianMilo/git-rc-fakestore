import express from 'express'
import userRoutes from './routes/users.routes.js'
// import productsRoutes from '../src/routes/products.routes.js'
// // import { productsRoutes, userRoutes} from '../src/routes/index.routes.js'
import cors from 'cors'
import { dbConnection } from './database/config.js'

export class Server{

  constructor() {
    this.app = express()

    this.middlewares()

    this.routes()
    this.connectionDb()

  }

  async connectionDb() {
      await dbConnection()
  }
  // //Así establecemos la conexion con nuestra base de datos.

  middlewares() {
    this.app.use(express.json())
  //la comunicación que va a recibir mi servidor tiene que estar en formato json sí o sí.
  
    this.app.use(cors())
  //cors permite la petición de cualquier origen cruzado. Es decir, permite o restringe el circuito por ciertas rutas.
  }

  routes() {
    this.app.use('/api/users', userRoutes)
    // this.app.use('/api/products', productsRoutes)
  }

  listen() {
    this.app.listen(8080, () => {
      console.log('Servidor corriendo en el puerto 8080')
    })

  }
}