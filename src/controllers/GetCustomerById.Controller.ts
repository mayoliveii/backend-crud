import { FastifyRequest, FastifyReply } from "fastify";
import { GetCustomerByIdService } from "../services/GetCustomerByIdService";

class GetCustomerByIdController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.body as { id: string };

    try {
      if (!id) {
        throw new Error('Id is required');
      }

      const getCustomerByIdService = new GetCustomerByIdService();
      const result = await getCustomerByIdService.execute({ id });

      reply.send(result);
    } catch (error: any) {
      const errorMessage = error.message || "Failed to get customer";
      reply.code(500).send({ id, error: errorMessage });
    }
  }
}

export { GetCustomerByIdController };