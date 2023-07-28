import dbConnect from "../../../db/connect";
import { Stock } from "../../../db/model";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const stock = await Stock.find(); // Hier Daten aus der "stock" -Collection abrufen
      return response.status(200).json(stock);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
  if (request.method === "PATCH") {
    const updatedStock = request.body;
    await Stock.findOneAndUpdate({}, updatedStock);
    response.status(200).json({ status: "Stock successfully updated." });
    return;
  }
}
