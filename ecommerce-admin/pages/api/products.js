import mongooseConnect from '@/lib/mongoose'
import { Product } from '@/lib/models/Product'

export default async function handle(req,res) {
    const {method} = req
    await mongooseConnect()

    if(method === 'GET'){
        if(req.query?.id){
            res.json(await Product.findOne({_id: req.query.id}))
        }
            res.json(await Product.find())
    }

    if(method === 'POST'){
        const {title, description, price} = req.body
        const productDoc = await Product.create({
            title, description, price
        })
        res.json(productDoc)
    }

    if(method === 'PUT'){
        const {_id, title, description, price} = req.body
        await Product.updateOne({_id}, {title, description, price})
        res.json(true)
    }

}