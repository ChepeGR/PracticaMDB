import {Request, Response} from "express";
import Membresia from "../clases/Membresia";

class controladorMembresia {

    async getAllMembresias(request: Request, response: Response){
        try {
            const memebresias = await Membresia.find();
            response.json(memebresias);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllMembresias' });
        }
    }

    async getMembresiaById(request: Request, response: Response){
        const memebresiaId = request.params.id;
        try {
            const nivelDeMembresia = await Membresia.findById(memebresiaId);
            if (nivelDeMembresia) {
                response.json(nivelDeMembresia);
            } else {
                response.status(404).json({ message: 'Membresia no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getMembresiaById' });
        }
    }

    async createMembresia(request: Request, response: Response){
        const {cliente, nivel} = request.body;

        const newMembresia = new Membresia({
            cliente,
            nivel,
        })
        try {
            const createMembresia = await newMembresia.save();
            response.json(createMembresia);
        } catch (error) {
            response.status(500).json({ message: 'Error: createMembresia' });
        }
    }

    async updateMembresia(request: Request, response: Response){
        const memebresiaId = request.params.id;
        const { cliente, nivel} = request.body;

        try {
            const nuevaMembresia  = await Membresia.findByIdAndUpdate(
                memebresiaId,
                {cliente, nivel},
                { new: true }
            );

            if (nuevaMembresia) {
                response.json(nuevaMembresia);
            } else {
                response.status(404).json({ message: 'Membresia no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateMembresia' });
        }
    }

    async deleteMembresia(request: Request, response: Response){
        const memebresiaId = request.params.id;

        try {
            const memebresiaBorrada= await Membresia.findByIdAndDelete(memebresiaId);

            if (memebresiaBorrada) {
                response.json(memebresiaBorrada);
            } else {
                response.status(404).json({ message: 'Membresia no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteMembresia' });
        }
    }
}

export default new controladorMembresia();