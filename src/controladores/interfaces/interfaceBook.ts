import { Document, Types } from "mongoose";
import { InterfaceAuthor } from "./interfaceAuthor";
import { InterfaceClient } from "./interfaceClient";

export interface InterfaceBook extends Document {
    title: string;
    genre: string;
    author: InterfaceAuthor; 
    client?: InterfaceClient; 
}
