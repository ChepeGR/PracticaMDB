import mongoose, { Document, Types } from 'mongoose';

export interface InterfaceReadingSession extends Document{
    book : Types.ObjectId,
    date : string,
    lounge : Types.ObjectId, 

}