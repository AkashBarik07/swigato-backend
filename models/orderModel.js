import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true }
}, { _id: false }); // Set `_id: false` if you don't need an `_id` field in `address`

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [{
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }],
    amount: { type: Number, required: true },
    address: { type: addressSchema, required: true },
    status: { type: String, default: "Food Processing" },
    date: { type: Date, default: Date.now },  // Correct usage of `Date.now`
    payment: { type: Boolean, default: false }
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
