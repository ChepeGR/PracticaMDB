import { Schema, model } from "mongoose";
import { InterfaceLounge } from "../controladores/interfaces/interfaceLounge";

const loungeSchema = new Schema<InterfaceLounge>({
    loungeNumber : {type: Number, req: true},
    size : {type: String, req: true},
    loungeName : {type: String, req: true},

})

const Lounge = model('Lounge', loungeSchema);
export default Lounge;