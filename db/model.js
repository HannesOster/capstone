import mongoose from "mongoose";

const { Schema } = mongoose;

const customerSchema = new Schema({
  name: { type: String, required: true },
  boxes: { type: Number, required: true },
  buckets: { type: Number, required: true },
  street: { type: String, required: false },
  location: { type: String, required: false },
  plz: { type: String, required: false },
  info: { type: String, required: false },
});

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);

const stockSchema = new Schema({
  stock: { type: Number, required: true },
});
const Stock = mongoose.models.Stock || mongoose.model("Stock", stockSchema);
export { Customer, Stock };
