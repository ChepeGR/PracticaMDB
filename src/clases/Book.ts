import {Schema, model} from "mongoose";
import { InterfaceBook } from "../controladores/interfaces/interfaceBook";

const bookSchema = new Schema<InterfaceBook>({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', req: true},
    client: {type: Schema.Types.ObjectId, ref: 'Client'},
}) 

const Book = model('Book', bookSchema);
export default Book;