import {Request, Response} from "express";
import Cliente from "../clases/Cliente";

class controladorCliente {

    async getAllCliente(request: Request, response: Response){
        try {
            const clientes = await Cliente.find();
            response.json(clientes);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllCliente' });
        }
    }

    async getClienteByName(request: Request, response: Response){
        const clientId = request.params.id;
        try {
            const nombreDelCliente = await Cliente.findById(clientId);
            if (nombreDelCliente) {
                response.json(nombreDelCliente);
            } else {
                response.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}