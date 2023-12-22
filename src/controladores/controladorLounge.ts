import { Request, Response } from "express";
import Lounge from "../clases/Lounge";

class controladorLounge{

    async getAllLounges(request: Request, response: Response){
        try {
            const lounges = await Lounge.find();
            response.json(lounges);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllLounges' });
        }
    }

    async getLoungeById(request: Request, response: Response){ 
        const loungeId = request.params.id;
        try {
            const lounge = await Lounge.findById(loungeId);
            if (lounge) {
                response.json(lounge);
            } else {
                response.status(404).json({ message: 'Lounge no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getLoungeById' });
        }
    }

    async createLounge(request: Request, response: Response){
        const {loungeNumber, size, loungeName} = request.body;
        const newLounge = new Lounge({
            loungeNumber,
            size,
            loungeName
        })

        try {
            const createdLounge = await newLounge.save();
            response.json(createdLounge);
        } catch (error) {
            response.status(500).json({ message: 'Error: createLounge' });
        }
    }
    

    async updateLounge(request: Request, response: Response){
        const loungeId = request.params.id;
        const { loungeNumber, size, loungeName} = request.body;

        try {
            const nuevaLounge  = await Lounge.findByIdAndUpdate(
                loungeId,
                { loungeNumber, size, loungeName },
                { new: true }
            );

            if (nuevaLounge) {
                response.json(nuevaLounge);
            } else {
                response.status(404).json({ message: 'Lounge no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateLounge' });
        }
    }

    async deleteLounge(request: Request, response: Response){
        const loungeId = request.params.id;

        try {
            const loungeDelete = await Lounge.findByIdAndDelete(loungeId);

            if (loungeDelete) {
                response.json(loungeDelete);
            } else {
                response.status(404).json({ message: 'Lounge no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteLounge Error' });
        }
    }
}

export default new controladorLounge();