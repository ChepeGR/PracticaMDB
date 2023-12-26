import {Schema, model} from "mongoose";
import { InterfaceAuthor } from "../controladores/interfaces/interfaceAuthor";
import Person from "./Person";

const authorSchema = new Schema<InterfaceAuthor>({
    rip: {type: Boolean, required: true},
    desc: {type: String, required: true},
})

const Author = Person.discriminator('Autor', authorSchema);
export default Author;