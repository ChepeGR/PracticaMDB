import {Schema, model} from "mongoose";
import Persona from './Persona'
import { InterfazCliente} from "../InterfazCliente";

const clienteSchema = new Schema<InterfazCliente>({
    dni: {type: Number, required: true},
    domicilio: {type: String, required: true},
})

const Cliente = Persona.discriminator('Cliente', clienteSchema);
export default Cliente;