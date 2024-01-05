import {Request, Response} from "express";
import Library from "../clases/Library";

class libraryController{

    async getAllLibrary(request: Request, response: Response){
        try{
            const libraries = await Library.find();
            response.json(libraries);
        } catch(error){
            response.status(500).json({message: 'Error: getAllLibrary'})
        }
    }
    async getLibraryById(request: Request, response: Response){
        const libraryId = request.params.id;
        try{
            const nameLibrary = await Library.findById(libraryId);
            if(nameLibrary){
                response.json(nameLibrary);
            }else{
                response.status(404).json({message: 'Library not found'})
            }
        } catch(error){
            response.status(500).json({message: 'Error: getLibraryById'})
        }
    }
    async createLibrary(request: Request, response: Response){
        const {numLib, books, manager} = request.body;
        const newLibrary = new Library({
            numLib,
            books,
            manager
        })
        try{
            const createdLibrary = await newLibrary.save();
            response.json(createdLibrary);
        }catch(error){
            response.status(500).json({message: 'Error: createLibrary'})
        }
    }
    async updateLibrary(request: Request, response:Response){
        const libraryId = request.params.id;
        const {numLib, books, manager} = request.body;

        try{
            const newLibrary = await Library.findByIdAndUpdate(
                libraryId,
                {numLib, books,manager},
                {new: true}
            );
            if(newLibrary){
                response.json(newLibrary);
            }else{
                response.status(404).json({message: 'Library not found'})
            }
        }catch(error){
            response.status(500).json({message : 'Error: updateLibrary'})
        }
    }
    async deleteLibrary(request: Request, response: Response){
        const libraryId = request.body.id;

        try{
            const libraryDeleted= await Library.findByIdAndDelete(libraryId);
            if(libraryDeleted){
                response.json(libraryDeleted)
            }else{
                response.status(404).json({message: 'Library not found'})
            }
        } catch(error){
            response.status(500).json({message: 'Error: deleteLibrary'})
        }
    }
}
export default new libraryController();
    
