import { InterfaceEmployee } from "./interfaceEmployee";

export interface InterfaceLibrary{
    numLib : string,
    books : [string],
    manager: InterfaceEmployee,
}