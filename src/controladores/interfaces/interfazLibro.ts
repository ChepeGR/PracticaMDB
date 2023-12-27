import { Document, Types } from "mongoose";
export interface InterfazLibro extends Document{
    titulo: string,
    genero: string,
    autor: Types.ObjectId,
    cliente: Types.ObjectId,
}
