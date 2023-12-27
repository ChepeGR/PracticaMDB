import { Schema, model } from "mongoose";
import { InterfaceReadingSession } from "../controladores/interfaces/interfaceReadingSession";

const readingSessionSchema = new Schema<InterfaceReadingSession>({
    book : {type : Schema.Types.ObjectId, ref: 'Book'},
    date : {type: String, req: true},
    lounge : {type: Schema.ObjectId, ref: 'Lounge', req: true},

})

const ReadingSession = model('ReadingSession', readingSessionSchema);
export default ReadingSession;

