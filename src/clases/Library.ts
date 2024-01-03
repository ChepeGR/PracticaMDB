import {Schema, model} from "mongoose";
import { InterfaceLibrary } from "../controladores/interfaces/interfaceLibrary";

const librarySchema = new Schema<InterfaceLibrary>({
    numLib : {type: String, req: true},
    books : {type : [String], req: true},
    manager :{type:Schema.Types.ObjectId, req: true, ref : 'Employee'}
})

const Library = model('Library', librarySchema);
export default Library;