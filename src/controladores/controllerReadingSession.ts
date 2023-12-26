import {Request, Response} from "express";
import ReadingSession from "../clases/ReadingSession";

class controllerReadingSession{

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
                response.status(404).json({ message: 'Reading session not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getReadingSessionById' });
        }
    }

    async createReadingSession(request: Request, response: Response){
        const {book, date, lounge} = request.body;
        const newReadingSession = new ReadingSession({
            book,
            date,
            lounge
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
        const {book, date, lounge } = request.body;

        try {
            const newReadingSession  = await ReadingSession.findByIdAndUpdate(
                readingSessionId,
                {book, date, lounge },
                { new: true }
            );

            if (newReadingSession) {
                response.json(newReadingSession);
            } else {
                response.status(404).json({ message: 'Reading session not found' });
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
                response.status(404).json({ message: 'Reading session not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deleteReadingSession Error' });
        }
    }
}

export default new controllerReadingSession();