import {Schema, model} from "mongoose";
import { InterfaceAuthor } from "../controladores/interfaces/interfaceAuthor";

const authorSchema = new Schema<InterfaceAuthor>({
    rip: {type: Boolean, required: true},
    desc: {type: String, required: true},
    name: {type: String, required:true},
    lastName : {type: String, required: true}
})

const Author = model<InterfaceAuthor>('Author', authorSchema);
export default Author;