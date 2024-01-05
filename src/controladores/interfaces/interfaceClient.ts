import { Types } from "mongoose";
import { InterfacePromotion } from "./interfacePromotion";
import { InterfacePerson } from "./interfacePerson";

export interface InterfaceClient extends InterfacePerson{
    idClient: number;
    promotion?: InterfacePromotion;
}