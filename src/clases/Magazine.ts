import {Schema, model} from "mongoose";
import Book from "./Book";
import { InterfaceMagazine } from "../controladores/interfaces/interfaceMagazine";

const magazineSchema = new Schema<InterfaceMagazine>({
    type : {type: String, req:true},
    number :{type: Number, req:true}
})

const Magazine = Book.discriminator('Magazine', magazineSchema);
export default Magazine;