import mongoose from "mongoose";

const { Schema } = mongoose;

const customerSchema = new Schema({
  name: { type: String, required: true },
  boxes: { type: Number, required: true },
  buckets: { type: Number, required: true },
  street: { type: String, required: false },
  location: { type: String, required: false },
  plz: { type: String, required: false },
});

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);

export default Customer;
