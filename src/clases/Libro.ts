import {Schema, model} from "mongoose";
import Cliente from "./Cliente"
import Autor from "./Autor"
import { InterfazLibro} from "../InterfazLibro";

const libroSchema = new Schema<InterfazLibro>({
    titulo: {type: String, required: true},
    genero: {type: String, required: true},
    autor: {type: Autor, required: true},
    cliente: {type: Cliente, required: true},
})

const Libro = model('Libro', libroSchema);
export default Autor;