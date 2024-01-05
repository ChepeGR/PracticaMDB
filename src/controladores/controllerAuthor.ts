import {Request, Response} from "express";
import Author from "../clases/Author";
 
class controllerAuthor {

    async getAllAuthores(request: Request, response: Response){
        try {
            const authores = await Author.find();
            response.json(authores);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllAuthores' });
        }
    }

    async getAuthorById(request: Request, response: Response){
        const authorId = request.params.id;
        try {
            const nameAuthor = await Author.findById(authorId);
            if (nameAuthor) {
                response.json(nameAuthor);
            } else {
                response.status(404).json({ message: 'Author not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getAuthorByName(request: Request, response: Response){
        const {name} = request.query;

        try{
            const author = await Author.findOne({nombre: name})

            if(!author){
                return response.status(404).json({message: 'Author no encontrado'})
            }
            response.status(200).json(author)
        }catch(error){
            response.status(500).json({message: 'Internal server Error'})
        }

    }

    async createAuthor(request: Request, response: Response){
        const {rip, desc, name, lastName} = request.body;

        const newAuthor = new Author({
            rip,
            desc,
            name,
            lastName
        })
        try {
            const createdAuthor = await newAuthor.save();
            response.json(createdAuthor);
        } catch (error) {
            response.status(500).json({ message: 'Error: createAuthor' });
        }
    }

    async updateAuthor(request: Request, response: Response){
        const authorId = request.params.id;
        const { rip, desc} = request.body;

        try {
            const newAuthor  = await Author.findByIdAndUpdate(
                authorId,
                {rip, desc },
                { new: true }
            );

            if (newAuthor) {
                response.json(newAuthor);
            } else {
                response.status(404).json({ message: 'Author no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateAuthor' });
        }
    }

    async deleteAuthor(request: Request, response: Response){
        const authorId = request.params.id;

        try {
            const authorBorrado = await Author.findByIdAndDelete(authorId);

            if (authorBorrado) {
                response.json(authorBorrado);
            } else {
                response.status(404).json({ message: 'Author no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteAuthor' });
        }
    }
}

export default new controllerAuthor();
