import  {model, Schema, Document} from 'mongoose';

const OrderSchema = new Schema({
    orderReport: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});


export default model('Order', OrderSchema);