import  bcrypt from 'bcryptjs'
import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
    email: string,
    password: string,
}

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase:true,
    },
    password: {
        type:String,
        required:true,
        select: false,
    }, 
    createAt: {
       type: Date,
       default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
   })

export default model<UserInterface>('User', UserSchema) 


