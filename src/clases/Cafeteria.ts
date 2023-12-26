import {Schema, model} from "mongoose";
import { InterfaceCafeteria } from "../controladores/interfaces/interfaceCafeteria";

const cafeteriaSchema = new Schema<InterfaceCafeteria>({
   order : {type: [String], required: true},
   bill : {type: Number, required: true}, // llamar caja
})

const Cafeteria = model('Coffe', cafeteriaSchema);
export default Cafeteria;