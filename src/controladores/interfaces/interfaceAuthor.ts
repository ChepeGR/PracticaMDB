import { Document, Types } from "mongoose";
import { InterfacePerson } from "./interfacePerson";

export interface InterfaceAuthor extends InterfacePerson{
    rip: boolean,
    desc: string,
}