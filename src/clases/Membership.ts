import mongoose, {Schema, model} from 'mongoose';
import { InterfaceMembership } from '../controladores/interfaces/interfaceMembership';

const membershipSchema = new Schema<InterfaceMembership>({
    client:{ type: Schema.Types.ObjectId, ref: 'Client' },
    level: {type: String, required: false},
}) 

const Membership = model('Membership', membershipSchema);
export default Membership;