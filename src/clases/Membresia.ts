import mongoose, {Schema, model} from 'mongoose';
import { InterfazMembresia } from '../controladores/interfaces/interfazMembrecia';

const membresiaSchema = new Schema<InterfazMembresia>({
    cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente' },
    nivel: {type: String, required: false},
})

const Membresia = model('Membresia', membresiaSchema);
export default Membresia;