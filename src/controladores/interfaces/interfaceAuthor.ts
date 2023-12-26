import { Document, Types } from "mongoose";

export interface InterfaceAuthor extends Document{
    person : Types.ObjectId,
    rip: boolean,
    desc: string,
}