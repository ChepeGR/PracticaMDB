import {Schema, model} from "mongoose";
import { InterfacePromotion } from "../controladores/interfaces/interfacePromotion";
import Person from "./Person";
import { InterfaceClient } from "../controladores/interfaces/interfaceClient";

const clientSchema = new Schema<InterfaceClient>({
    idClient: { type: Number, required: true },
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: false }
});

const Client = Person.discriminator('Client', clientSchema);
export default Client;