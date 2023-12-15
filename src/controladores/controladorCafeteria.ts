import {Request, Response} from "express";
import Cafeteria from "../clases/Cafeteria";

class controladorCafeteria {

    async getAllCafeteria(request: Request, response: Response){
        try {
            const cafes = await Cafeteria.find();
            response.json(cafes);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllAutores' });
        }
    }

    async getCafeteriaByName(request: Request, response: Response){
        const cafeId = request.params.id;
        try {
            const nombreCafe = await Cafeteria.findById(cafeId);
            if (nombreCafe) {
                response.json(nombreCafe);
            } else {
                response.status(404).json({ message: 'Pedido not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createdCafe(request: Request, response: Response){
        const {pedido, descuentoPorVip, cuenta} = request.body;

        const newCafeteria = new Cafeteria({
            pedido,
            descuentoPorVip,
            cuenta,
        })
        try {
            const createdCafe = await newCafeteria.save();
            response.json(createdCafe);
        } catch (error) {
            response.status(500).json({ message: 'Error: createdCafe' });
        }
    }

    async updateCafe(request: Request, response: Response){
        const cafeId = request.params.id;
        const { pedido, descuentoPorVip, cuenta} = request.body;

        try {
            const nuevoCafe  = await Cafeteria.findByIdAndUpdate(
                cafeId,
                {pedido, descuentoPorVip,cuenta },
                { new: true }
            );

            if (nuevoCafe) {
                response.json(nuevoCafe);
            } else {
                response.status(404).json({ message: 'Cafe no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateCafe' });
        }
    }

    async deleteCafe(request: Request, response: Response){
        const cafeId = request.params.id;

        try {
            const cafeBorrado = await Cafeteria.findByIdAndDelete(cafeId);

            if (cafeBorrado) {
                response.json(cafeBorrado);
            } else {
                response.status(404).json({ message: 'Pedido no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteCafe' });
        }
    }
}

export default new controladorCafeteria();
