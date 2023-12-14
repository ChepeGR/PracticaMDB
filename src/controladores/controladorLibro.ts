import {Request, Response} from "express";
import Libro from "../clases/Libro";

class controladorLibro{

    async getAllLibros(request: Request, response: Response){
        try {
            const libros = await Libro.find();
            response.json(libros);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllLibros' });
        }
    }

    async getLibroById(request: Request, response: Response){ 
        const libroId = request.params.id;
        try {
            const libro = await Libro.findById(libroId);
            if (libro) {
                response.json(libro);
            } else {
                response.status(404).json({ message: 'Libro no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getLibroByTitulo' });
        }
    }

    async createLibro(request: Request, response: Response){
        const {titulo, genero, autor, cliente} = request.body;
        const newLibro = new Libro({
            titulo,
            genero,
            autor,
            cliente
        })
        
        try {
            const createdLibro = await newLibro.save();
            response.json(createdLibro);
        } catch (error) {
            response.status(500).json({ message: 'Error: createLibro' });
        }
    }
    

    async updateLibro(request: Request, response: Response){
        const libroId = request.params.id;
        const { titulo, genero, autor, cliente } = request.body;

        try {
            const nuevoLibro  = await Libro.findByIdAndUpdate(
                libroId,
                { titulo, genero, autor, cliente },
                { new: true }
            );

            if (nuevoLibro) {
                response.json(nuevoLibro);
            } else {
                response.status(404).json({ message: 'Libro no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateLibro' });
        }
    }

    async deleteLibro(request: Request, response: Response){
        const libroId = request.params.id;

        try {
            const libroBorrado = await Libro.findByIdAndDelete(libroId);

            if (libroBorrado) {
                response.json(libroBorrado);
            } else {
                response.status(404).json({ message: 'Libro no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteLibro Error' });
        }
    }
}

export default new controladorLibro();