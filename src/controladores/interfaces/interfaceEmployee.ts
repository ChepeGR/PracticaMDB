import { Document } from "mongoose";

export interface InterfaceEmployee extends Document{
    officeHours: string
}