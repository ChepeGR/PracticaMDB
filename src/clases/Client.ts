import {Schema, model} from "mongoose";
import Person from "./Person";
import { InterfaceClient } from "../controladores/interfaces/interfaceClient";

const clientSchema = new Schema<InterfaceClient>({
    id: {type: Number, required: true},
    adress: {type: String, required: false},
    vip : {type: Boolean, required : true},
})

const Client = Person.discriminator('Client', clientSchema);
export default Client;