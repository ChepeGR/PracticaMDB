import {Schema, model} from "mongoose";
import Persona from './Persona'
import { InterfazCliente } from "../controladores/interfaces/interfazCliente";

const clienteSchema = new Schema<InterfazCliente>({
    dni: {type: Number, required: false},
    domicilio: {type: String, required: false},
})

const Cliente = Persona.discriminator('Cliente', clienteSchema);
export default Cliente;