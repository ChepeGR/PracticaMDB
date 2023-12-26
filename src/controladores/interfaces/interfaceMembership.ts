import mongoose, { Document, Types } from 'mongoose';
 
export interface InterfaceMembership extends Document{
    client: Types.ObjectId,
    level: string,
}