import { Schema, model } from "mongoose";
import { InterfazReadingSession } from "../controladores/interfaces/interfazExhibition";

const readinSessionSchema = new Schema<InterfazReadingSession>({
    libro : {type : Schema.Types.ObjectId, ref: 'Libro'},
    date : {type: String, req: true},
    lounge : {type: Schema.ObjectId, ref: 'Lounge', req: true},

})

const ReadingSession = model('ReadingSession', readinSessionSchema);
export default ReadingSession;

