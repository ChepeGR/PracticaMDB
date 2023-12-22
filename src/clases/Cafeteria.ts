import {Schema, model} from "mongoose";
import { InterfazCafeteria } from "../controladores/interfaces/interfazCafeteria";

const cafeteriaSchema = new Schema<InterfazCafeteria>({
   pedido : {type: [String], required: true},
   bill : {type: Number, required: true}, // llamar caja
})

const Cafeteria = model('Cafe', cafeteriaSchema);
export default Cafeteria;