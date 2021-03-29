import express from 'express'
import app from 'express-router-group'
import UserController from '../controller/UserController'
import cartaNatalController from '../controller/cartaNatalController';
import authMiddleware from '../middlewares/auth'

const routes = express.Router(app)

routes.get('/', (req, res)=> {
   res.send('SEJA BEM VINDO A REST CRUD API, VOCÊ ESTÁ USANDO A VERSÃO V:1.0.0 E NO FUTURO NÂO TÂO DISTANTE IRÁ TER NOVAS VERSÕES')
})

routes.group("/public", routes => {
    
    routes.post('/register', UserController.create)
    routes.get('/auth', UserController.index)

})

routes.group('/private', routes => {

    routes.post('/create', cartaNatalController.create)
    routes.get('/full',   cartaNatalController.index)
    routes.put('/update/:id', cartaNatalController.update)
    routes.delete('/delete/:id', cartaNatalController.delete)

}).use(authMiddleware)


export default routes