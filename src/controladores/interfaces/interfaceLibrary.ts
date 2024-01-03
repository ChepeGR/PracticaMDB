import { Types } from "mongoose";

export interface InterfaceLibrary{
    numLib : string,
    books : [string],
    manager: Types.ObjectId,
}