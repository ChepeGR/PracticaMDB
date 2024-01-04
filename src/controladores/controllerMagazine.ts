import {Request, Response} from "express";
import Magazine from "../clases/Magazine";

class magazineController{

    async getAllMagazine(request: Request, response: Response){
        try{
            const magazines =  await Magazine.find();
            response.json(magazines);
        } catch(error){
            response.status(500).json({message: 'Error: getAllMagazine'})
        }
    }
    async getMagazineById(request: Request, response: Response){
        const magazineId = request.params.id;
        try{
            const nameMagazine= await Magazine.findById(magazineId);
            if(nameMagazine){
                response.json(nameMagazine);
            }else{
                response.status(404).json({message: 'Magazine not found'})
            }
        }catch(error){
            response.status(500).json({message:'Error: getMagazineByIds'})
        }
    }
    async createMagazine(request: Request, response: Response){
        const {type, number} = request.body;
        const newMagazine = new Magazine({
            type,
            number
        })
        try{
            const createdMagazine = await newMagazine.save();
            response.json(createdMagazine);
        }catch(error){
            response.status(500).json({message: 'Error: createMagazine'})
        }
    }
    async updateMagazine(request: Request, response: Response){
        const magazineId = request.params.id;
        const {type, number} = request.body;

        try{
            const newMagazine = await Magazine.findByIdAndUpdate(
                magazineId,
                {type, number},
                {new: true}
            );
            if(newMagazine){
                response.json(newMagazine)
            }else{
                response.status(404).json({message: 'Magazine not found'})
            }
        }catch(error){
            response.status(500).json({message: 'Error: updateMagazine'})
        }
    }
    async deleteMagazine(request: Request, response: Response){
        const magazineId=request.body.id;

        try{
            const magazineDeleted= await Magazine.findByIdAndDelete(magazineId);
            if(magazineDeleted){
                response.json(magazineDeleted)
            }else{
                response.status(404).json({message:'Magazine not found'})
            }
        } catch(error){
            response.status(500).json({message: 'Error: deleteMagazine'})
        }
    }
}

export default new magazineController();