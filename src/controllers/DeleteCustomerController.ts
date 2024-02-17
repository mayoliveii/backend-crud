import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const deleteCustomerService = new DeleteCustomerService();

    try {
      const result = await deleteCustomerService.execute({ id });
      reply.send(result);
    } catch (error: any) {
      const errorMessage = error.message || "Failed to delete customer";
      reply.code(500).send({ id, error: errorMessage });
    }
  }
}

export { DeleteCustomerController };
