import { Router } from 'express'
import {inicioSession, consultar, validateToken, inicio, registrar,registroInmueble, image, upload} from '../controller/login.controller.js'


//Definición de rutas 
const router = Router()
router.post('/login', inicioSession)
router.get('/inicio', validateToken, inicio);
router.get('/consult', consultar)
router.post('/registro', registrar)
router.post('/regis',registroInmueble)

  
// Ruta para subir una imagen
router.post('/subir', upload.single('imagen'),image)
export default router;