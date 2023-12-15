import mongoose, { Document, Schema, Types } from 'mongoose';

export interface InterfazMembresia extends Document{
    cliente: Types.ObjectId,
    nivel: string,
}