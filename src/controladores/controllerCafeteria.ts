import {Request, Response} from "express";
import Cafeteria from "../clases/Cafeteria";

class controllerCafeteria {

    async getAllCafeteria(request: Request, response: Response){
        try {
            const coffes = await Cafeteria.find();
            response.json(coffes);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllCafeteria' });
        }
    }

    async getCafeteriaByName(request: Request, response: Response){
        const coffeId = request.params.id;
        try {
            const nameCoffe = await Cafeteria.findById(coffeId);
            if (nameCoffe) {
                response.json(nameCoffe);
            } else {
                response.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createdCafeteria(request: Request, response: Response){
        const {order, bill} = request.body;

        const newCafeteria = new Cafeteria({
            order,
            bill,
        })
        try {
            const createdCoffe = await newCafeteria.save();
            response.json(createdCoffe);
        } catch (error) {
            response.status(500).json({ message: 'Error: createdCafeteria' });
        }
    }

    async updateCafeteria(request: Request, response: Response){
        const coffeId = request.params.id;
        const { order, bill} = request.body;

        try {
            const newCafeteria  = await Cafeteria.findByIdAndUpdate(
                coffeId,
                {order, bill },
                { new: true }
            );

            if (newCafeteria) {
                response.json(newCafeteria);
            } else {
                response.status(404).json({ message: 'Coffe no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateCafeteria' });
        }
    }

    async deleteCafeteria(request: Request, response: Response){
        const coffeId = request.params.id;

        try {
            const coffeDeleted = await Cafeteria.findByIdAndDelete(coffeId);

            if (coffeDeleted) {
                response.json(coffeDeleted);
            } else {
                response.status(404).json({ message: 'Pedido no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteCafe' });
        }
    }
}

export default new controllerCafeteria();
