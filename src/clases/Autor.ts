import {Schema, model} from "mongoose";
import Persona from './Persona'
import { InterfazAutor } from "../controladores/interfaces/interfazAutor";

const autorSchema = new Schema<InterfazAutor>({
    rip: {type: Boolean, required: true},
    desc: {type: String, required: true},
})

const Autor = Persona.discriminator('Autor', autorSchema);
export default Autor;