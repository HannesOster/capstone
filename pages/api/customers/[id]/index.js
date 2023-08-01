import dbConnect from "../../../../db/connect";
import { Customer } from "../../../../db/model";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const customer = await Customer.findById(id);

    if (!customer) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(customer);
  }
  if (request.method === "PATCH") {
    const updatedCustomer = request.body;
    console.log(updatedCustomer);
    await Customer.findByIdAndUpdate(id, updatedCustomer);
    response.status(200).json({ status: "Customer successfully updated." });
    return;
  }
}
