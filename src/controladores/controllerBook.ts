import {Request, Response} from "express";
import Book from "../clases/Book";

class controllerBook{

    async getAllBooks(request: Request, response: Response){
        try {
            const books = await Book.find();
            response.json(Book);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllBooks' });
        }
    }
 
    async getBookById(request: Request, response: Response){ 
        const bookId = request.params.id;
        try {
            const book = await Book.findById(bookId);
            if (book) {
                response.json(book);
            } else {
                response.status(404).json({ message: 'Book no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getBookById' });
        }
    }

    async createBook(request: Request, response: Response){
        const {title, genre, author, client} = request.body;
        const newBook = new Book({
            title,
            genre,
            author,
            client
        })

        try {
            const createdBook = await newBook.save();
            response.json(createdBook);
        } catch (error) {
            response.status(500).json({ message: 'Error: createBook' });
        }
    }
    

    async updateBook(request: Request, response: Response){
        const bookId = request.params.id;
        const { title, genre, author, client } = request.body;

        try {
            const newBook  = await Book.findByIdAndUpdate(
                bookId,
                { title, genre, author, client },
                { new: true }
            );

            if (newBook) {
                response.json(newBook);
            } else {
                response.status(404).json({ message: 'Book no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateBook' });
        }
    }

    async deleteBook(request: Request, response: Response){
        const bookId = request.params.id;

        try {
            const deletedBook = await Book.findByIdAndDelete(bookId);

            if (deletedBook) {
                response.json(deletedBook);
            } else {
                response.status(404).json({ message: 'Book no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteBook Error' });
        }
    }
}

export default new controllerBook();