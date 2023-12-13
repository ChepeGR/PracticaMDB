import {Request, Response} from "express";
import Persona from "../clases/Persona";

class controladorPersona {

    async getAllPersonas(request: Request, response: Response){
        try {
            const personas = await Persona.find();
            response.json(personas);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllPersonas' });
        }
    }

    async getPersonaByName(request: Request, response: Response){
        const personaId = request.params.id;
        try {
            const personaName = await Persona.findById(personaId);
            if (personaName) {
                response.json(personaName);
            } else {
                response.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getPersonaByName' });
        }
    }


    async createPersona(request: Request, response: Response){
        const {name, apellido} = request.body;

        const newPersona = new Persona({
            name,
            apellido,
        })
        try {
            const nuevaPersona = await newPersona.save();
            response.json(nuevaPersona);
        } catch (error) {
            response.status(500).json({ message: 'Error: createPersona' });
        }
    }

    async updatePersona(request: Request, response: Response){
        const personaId = request.params.id;
        const { nombre, apellido } = request.body;

        try {
            const nuevaPersona  = await Persona.findByIdAndUpdate(
                personaId,
                { nombre, apellido },
                { new: true }
            );

            if (nuevaPersona) {
                response.json(nuevaPersona);
            } else {
                response.status(404).json({ message: 'Libro no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateLibro' });
        }
    }

    async deletePersona(request: Request, response: Response){
        const personaId = request.params.id;

        try {
            const personaBorrada = await Persona.findByIdAndDelete(personaId);

            if (personaBorrada) {
                response.json(personaBorrada);
            } else {
                response.status(404).json({ message: 'Persona no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deletePersona Error' });
        }
    }
}
export default new controladorPersona();