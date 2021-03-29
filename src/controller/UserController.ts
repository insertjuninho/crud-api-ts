import { Request, Response } from 'express';
import User from '../schemas/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import jwtconfig from '../config/jwt.json'

function generateToken(params = {}){
    return jwt.sign(params, jwtconfig.secret, {
        expiresIn: 86400
    })
}

class UserController {

    public async create(req: Request, res: Response): Promise<Response>{

        const {email, password} = req.body
      
        
        try {
            if(await User.findOne({email})){
                return res.status(400).send({ error: 'User Already exists'})
            }

            const passwordHash = await bcrypt.hash(password, 10)

            const register = await User.create({email, password: passwordHash})
        
            register.password = undefined
        
            return res.status(201).send({
                register, 
                token: generateToken({ id: register.id }) 
            });

        } catch (error) {
            return res.status(400).send({ error: 'Registration failed'})
        }
    }
    
    public async index(req: Request, res: Response): Promise<Response>{

        const  { email, password } = req.body;
        
        const auth = await User.findOne({email}).select('+password')
        
        if(!auth) return res.status(400).send({ error: 'User Not Found'})
        
        if(!await bcrypt.compare(password, auth.password)) return res.status(400).send({error: 'Invalid password'})
        
        auth.password = undefined

        const token = jwt.sign({ id: auth.id}, jwtconfig.secret,{
            expiresIn: 86400
        })

        res.send({
            auth,
            token: generateToken({ id: auth.id})
        })
    }

}

export default new UserController()