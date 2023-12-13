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

    async createAutor(request: Request, response: Response){
        const {rip, desc} = request.body;

        const newAutor = new Autor({
            rip,
            desc,
        })
        try {
            const createdAutor = await newAutor.save();
            response.json(createdAutor);
        } catch (error) {
            response.status(500).json({ message: 'Error: createLibro' });
        }
    }

    async updateAutor(request: Request, response: Response){
        const autorId = request.params.id;
        const { rip, desc} = request.body;

        try {
            const nuevoAutor  = await Autor.findByIdAndUpdate(
                autorId,
                {rip, desc },
                { new: true }
            );

            if (nuevoAutor) {
                response.json(nuevoAutor);
            } else {
                response.status(404).json({ message: 'Autor no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateAutor' });
        }
    }

    async deleteAutor(request: Request, response: Response){
        const autorId = request.params.id;

        try {
            const autorBorrado = await Autor.findByIdAndDelete(autorId);

            if (autorBorrado) {
                response.json(autorBorrado);
            } else {
                response.status(404).json({ message: 'Autor no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteAutor' });
        }
    }
}

export default new controladorAutor();
