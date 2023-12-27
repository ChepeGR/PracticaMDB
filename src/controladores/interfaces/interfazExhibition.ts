import mongoose, { Document, Types } from 'mongoose';

export interface InterfazReadingSession extends Document{
    libro : Types.ObjectId,
    date : string,
    lounge : Types.ObjectId,

}