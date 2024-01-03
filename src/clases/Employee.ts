import {Schema, model} from "mongoose";
import Person from "./Person";
import { InterfaceEmployee } from "../controladores/interfaces/interfaceEmployee";

const employeeSchema = new Schema<InterfaceEmployee>({
    officeHours: {type: String, req: true}
})

const Employee = Person.discriminator('Employee', employeeSchema);
export default Employee; 