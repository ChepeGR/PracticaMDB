import {Request, Response} from "express";
import Promotion from "../clases/Promotion";

class promotionController{

    async getAllPromotion(request: Request, response: Response){
        try{
            const promotions = await Promotion.find();
            response.json(promotions);
        }catch(error){
            response.status(500).json({message: 'Error: getAllPromotion'})
        }
    }
    async getPromotionById(request: Request, response: Response){
        const promotionId= request.params.id;
        try{
            const namePromotion = await Promotion.findById(promotionId);
            if(namePromotion){
                response.json(namePromotion)
            }else{
                response.status(404).json({message: 'Promotion not found'})
            }
        }catch(error){
            response.status(500).json({message: 'Error: getPromotionById'})
        }
    }
    async createPromotion(request: Request, response: Response){
        const {nameProm, percentDis}= request.body;
        const newPromotion = new Promotion({
            nameProm,
            percentDis
        })
        try{
            const createdPromotion = await newPromotion.save();
            response.json(createdPromotion)
        }catch(error){
            response.status(500).json({message:'Error: createPromotion'})
        }
    }
    async updatePromotion(request: Request, response: Response){
        const promotionId = request.params.id;
        const {nameProm, percentDis}= request.body;

        try{
            const newPromotion = await Promotion.findByIdAndUpdate(
                promotionId,
                {nameProm, percentDis},
                {new: true}
            );
            if(newPromotion){
                response.json(newPromotion);
            }else{
                response.status(404).json({message: 'Promotion not found'})
            }
        }catch(error){
            response.status(500).json({message: 'Error: updatePromotion'})
        }
    }
    async deletePromotion(request: Request, response: Response){
        const promotionId = request.body.id;

        try{
            const promotionDeleted = await Promotion.findByIdAndDelete(promotionId);
            if(promotionDeleted){
                response.json(promotionDeleted)
            }else{
                response.status(404).json({message: 'Promotion not found'})
            }
        }catch(error){
            response.status(500).json({message: 'Error: deletePromotion'})
        }
    }
}
export default new promotionController();