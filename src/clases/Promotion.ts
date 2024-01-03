import {Schema, model} from "mongoose";
import { InterfacePromotion } from "../controladores/interfaces/interfacePromotion";

const promotionSchema = new Schema<InterfacePromotion>({
    nameProm : {type: String, req: true},
    percentDis: {type: String, req: true}
})

const Promotion = model('Promotion', promotionSchema);
export default Promotion;