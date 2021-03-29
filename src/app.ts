import express from 'express'
import cors from 'cors'
import routes from './routes/routes'
import mongoose from 'mongoose'

class App {
    public express: express.Application

    constructor (){
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void{
        this.express.use(express.json());
        this.express.use(cors())
    }

     private database (): void{
         mongoose.connect('mongodb+srv://alexande:junior26562854@cluster0.d3uab.mongodb.net/carta-natal?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         })
         mongoose.Promise = global.Promise
     }

    private routes (): void{
        this.express.use(routes)
    }
}

export default new App().express