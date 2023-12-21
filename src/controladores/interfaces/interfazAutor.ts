import { Document, Types } from "mongoose";

export interface InterfazAutor extends Document{
    persona : Types.ObjectId,
    rip: boolean,
    desc: string,
}