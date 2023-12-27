import {Schema, model} from "mongoose";
import { InterfacePerson } from "../controladores/interfaces/interfacePerson";

const personSchema = new Schema<InterfacePerson>({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
})
 
const Person = model('Person', personSchema);
export default Person;