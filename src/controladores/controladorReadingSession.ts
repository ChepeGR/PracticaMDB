import {Request, Response} from "express";
import ReadingSession from "../clases/ReadingSession";

class controladorReadingSession{

    async getAllReadingSession(request: Request, response: Response){
        try {
            const readingSession = await ReadingSession.find();
            response.json(readingSession);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllReadingSession'});
        }
    }

    async getReadingSessionById(request: Request, response: Response){ 
        const readingSessionId = request.params.id;
        try {
            const readingSession = await ReadingSession.findById(readingSessionId);
            if (readingSession) {
                response.json(readingSession);
            } else {
                response.status(404).json({ message: 'Reading session no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getReadingSessionById' });
        }
    }

    async createReadingSession(request: Request, response: Response){
        const {libro, date} = request.body;
        const newReadingSession = new ReadingSession({
            libro,
            date
        })

        try {
            const createdReadingSession = await newReadingSession.save();
            response.json(createdReadingSession);
        } catch (error) {
            response.status(500).json({ message: 'Error: createReadingSession'});
        }
    }
    

    async updateReadingSession(request: Request, response: Response){
        const readingSessionId = request.params.id;
        const {libro, date } = request.body;

        try {
            const newReadingSession  = await ReadingSession.findByIdAndUpdate(
                readingSessionId,
                {libro, date },
                { new: true }
            );

            if (newReadingSession) {
                response.json(newReadingSession);
            } else {
                response.status(404).json({ message: 'Reading session no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateReadingSession'});
        }
    }

    async deleteReadingSession(request: Request, response: Response){
        const readingSessionId = request.params.id;

        try {
            const readingSessionDeleted = await ReadingSession.findByIdAndDelete(readingSessionId);

            if (readingSessionDeleted) {
                response.json(readingSessionDeleted);
            } else {
                response.status(404).json({ message: 'Reading session no encontrada' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteReadingSession Error' });
        }
    }
}

export default new controladorReadingSession();