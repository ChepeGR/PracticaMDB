import {Schema, model} from "mongoose";
import { InterfazLibro } from "../controladores/interfaces/interfazLibro"

const libroSchema = new Schema<InterfazLibro>({
    titulo: {type: String, required: true},
    genero: {type: String, required: true},
    autor: {type: Schema.Types.ObjectId, ref: 'Autor'},
    cliente: {type: Schema.Types.ObjectId, ref: 'Cliente'},
})

const Libro = model('Libro', libroSchema);
export default Libro;