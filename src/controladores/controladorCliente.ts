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
                response.status(404).json({ message: 'Cliente no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getClienteBtName' });
        }
    }

    async createCliente(request: Request, response: Response){
        const {dni, domicilio} = request.body;

        const newCliente = new Cliente({
            dni,
            domicilio,
        })
        try {
            const createdCliente = await newCliente.save();
            response.json(createdCliente);
        } catch (error) {
            response.status(500).json({ message: 'Error: createCliente' });
        }
    }

    async updateCliente(request: Request, response: Response){
        const clienteId = request.params.id;
        const { dni, domicilio} = request.body;

        try {
            const nuevoCliente  = await Cliente.findByIdAndUpdate(
                clienteId,
                {dni, domicilio },
                { new: true }
            );

            if (nuevoCliente) {
                response.json(nuevoCliente);
            } else {
                response.status(404).json({ message: 'Cliente no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateCliente' });
        }
    }

    async deleteCliente(request: Request, response: Response){
        const clienteId = request.params.id;

        try {
            const clienteBorrado= await Cliente.findByIdAndDelete(clienteId);

            if (clienteBorrado) {
                response.json(clienteBorrado);
            } else {
                response.status(404).json({ message: 'Cliente no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteCliente' });
        }
    }
}

export default new controladorCliente();
