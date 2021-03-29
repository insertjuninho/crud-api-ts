import { Request, Response } from 'express';
import carta from '../schemas/cartaNatal'

class cartaNatalController {
    public async create (req: Request, res: Response): Promise<Response>{
       
       try {
           
        const createCarta = await carta.create(req.body)

        return res.status(201).json(createCarta);

       } catch (error) {
              return res.send(({
                message: 'Não foi possível cadastrar a carta'
            }))
       }
    }

    public async index(req: Request, res: Response): Promise<Response>{
        const cartaNatal = await carta.find()

        if(carta.length == 0) return res.send({message: 'Não possui nenhuma carta cadastrada'})

        return res.json(cartaNatal);
    }

    public async update(req: Request, res: Response): Promise<Response>{

        const { titulo, conteudo } = req.body;
        let search = await carta.findById(req.params.id);
        
        try {
          await carta.update({"_id": search._id}, {$set:{"titulo":titulo, "conteudo":conteudo}})
          return res.status(200).json(search)

        } catch (error) {
            return res.send({
                message: 'Não foi possível realizar as alterações'
            })
        }
    }

    public async delete(req: Request, res: Response): Promise<Response>{

        try {
            await carta.findByIdAndRemove(req.params.id).exec();
            return res.send(({
                message: 'A carta foi excluida com sucesso'
            }))
        } catch (error) {
            return res.send(({
                message: 'Não foi possível excluir a carta solicitada'
            }))
        }
    }
}

export default new cartaNatalController()