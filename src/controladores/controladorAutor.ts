import {Request, Response} from "express";
import Autor from "../clases/Autor";

class controladorAutor {

    async getAllAutores(request: Request, response: Response){
        try {
            const autores = await Autor.find();
            response.json(autores);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllAutores' });
        }
    }

    async getAutorByName(request: Request, response: Response){
        const autorId = request.params.id;
        try {
            const nombreAutor = await Autor.findById(autorId);
            if (nombreAutor) {
                response.json(nombreAutor);
            } else {
                response.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}