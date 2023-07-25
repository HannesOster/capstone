import dbConnect from "../../db/connect";
import Customer from "../../db/model";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const customers = await Customer.find();
    return response.status(200).json(customers);
  }
}
