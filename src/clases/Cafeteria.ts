import {Schema, model} from "mongoose";
import Cliente from "./Cliente";
import { InterfazCafeteria } from "../controladores/interfaces/interfazCafeteria";

const cafeteriaSchema = new Schema<InterfazCafeteria>({
   pedido : {type: String, required: true},
   descuentoPorVip : {type: Boolean, required: true},
   cuenta : {type: Number, required: true},
})

const Cafeteria = model('Cafe', cafeteriaSchema);
export default Cafeteria;