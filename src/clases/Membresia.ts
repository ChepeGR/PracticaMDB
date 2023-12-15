import mongoose, { Document, Schema, Types } from 'mongoose';
import Cliente from './Cliente';
import { InterfazMembresia } from '../controladores/interfaces/interfazMembrecia';

const membresiaSchema = new Schema<InterfazMembresia>({
    cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente' },
    nivel: {type: String, required: false},
})

const Membresia = Cliente.discriminator('Membresia', membresiaSchema);
export default Membresia;