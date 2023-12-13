import {Schema, model} from "mongoose";
import { InterfazPersona} from "../InterfazPersona";

const personaSchema = new Schema<InterfazPersona>({
    name: {type: String, required: true},
    apellido: {type: String, required: true},
})

const Persona = model('Person', personaSchema);
export default Persona;