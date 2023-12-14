import {Schema, model} from "mongoose";
import { InterfazLibro } from "../controladores/interfaces/interfazLibro"

const libroSchema = new Schema<InterfazLibro>({
    titulo: {type: String, required: true},
    genero: {type: String, required: true},
    autor: {type: String, required: true},
    cliente: {type: String, required: true},
})

const Libro = model('Libro', libroSchema);
export default Libro;