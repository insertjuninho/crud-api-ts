import { Schema, model } from 'mongoose'

const CartaNatalSchema = new Schema({
    titulo: String,
    conteudo: String,
   
}, {
    timestamps: true
})

export default model('CartaNatal', CartaNatalSchema) 