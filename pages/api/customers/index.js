import dbConnect from "../../../db/connect";
import { Customer } from "../../../db/model";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const session = await getServerSession(request, response, authOptions);

    if (!session) {
      return response.status(401).json({ message: "please log in" });
    }

    const customers = await Customer.find();
    return response.status(200).json(customers);
  }
  if (request.method === "POST") {
    try {
      const session = await getServerSession(request, response, authOptions);

      if (!session) {
        return response.status(401).json({ message: "please log in" });
      }

      const customerData = request.body;
      const customer = new Customer(customerData);
      await customer.save();
      return response.status(201).json({ status: "Customer created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
