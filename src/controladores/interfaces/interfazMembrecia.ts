import mongoose, { Document, Types } from 'mongoose';

export interface InterfazMembresia extends Document{
    cliente: Types.ObjectId,
    nivel: string,
}