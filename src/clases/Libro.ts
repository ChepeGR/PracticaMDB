import {Schema, model} from "mongoose";
import Cliente from "./Cliente"
import Autor from "./Autor"
import { InterfazLibro } from "../controladores/interfaces/interfazLibro"

const libroSchema = new Schema<InterfazLibro>({
    titulo: {type: String, required: true},
    genero: {type: String, required: true},
    autor: {type: Object, required: true},
    cliente: {type: Object, required: true},
})

const Libro = model('Libro', libroSchema);
export default Autor;