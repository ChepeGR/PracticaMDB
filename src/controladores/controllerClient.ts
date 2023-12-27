import {Request, Response} from "express";
import Client from "../clases/Client";

class controllerClient {

    async getAllClients(request: Request, response: Response){
        try {
            const clients = await Client.find();
            response.json(clients);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllClients' });
        }
    }

    async getClientByName(request: Request, response: Response){
        const clientId = request.params.id;
        try {
            const nameClient = await Client.findById(clientId);
            if (nameClient) {
                response.json(nameClient);
            } else {
                response.status(404).json({ message: 'Client no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getClientByName' });
        }
    }

    async createClient(request: Request, response: Response){
        const {id, adress, vip} = request.body;

        const newClient = new Client({
            id,
            adress,
            vip
        })
        try {
            const createdClient = await newClient.save();
            response.json(createdClient);
        } catch (error) {
            response.status(500).json({ message: 'Error: createClient' });
        }
    }

    async updateClient(request: Request, response: Response){
        const clientId = request.params.id;
        const { id, adress, vip} = request.body;

        try {
            const newClient  = await Client.findByIdAndUpdate(
                clientId,
                {id, adress, vip},
                { new: true }
            );

            if (newClient) {
                response.json(newClient);
            } else {
                response.status(404).json({ message: 'Client no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateClient' });
        }
    }

    async deleteClient(request: Request, response: Response){
        const clientId = request.params.id;

        try {
            const clientBorrado= await Client.findByIdAndDelete(clientId);

            if (clientBorrado) {
                response.json(clientBorrado);
            } else {
                response.status(404).json({ message: 'Client no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteClient' });
        }
    }
}

export default new controllerClient();
