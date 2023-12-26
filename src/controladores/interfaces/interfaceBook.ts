import { Document, Types } from "mongoose";

export interface InterfaceBook  extends Document{
    title: string,
    genre: string,
    author: Types.ObjectId,
    client: Types.ObjectId,
} 
