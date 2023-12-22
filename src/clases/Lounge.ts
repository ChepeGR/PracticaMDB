import { Schema, model } from "mongoose";
import { interfaceLounge } from "../controladores/interfaces/interfazLounge";

const loungeSchema = new Schema<interfaceLounge>({
    loungeNumber : {type: Number, req: true},
    size : {type: String, req: true},
    loungeName : {type: String, req: true},

})

const Lounge = model('Lounge', loungeSchema);
export default Lounge;