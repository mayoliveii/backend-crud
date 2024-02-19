import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  private async createCustomer({ name, email, phone }: { name: string; email: string; phone: string }) {
    const createCustomerService = new CreateCustomerService();
    return await createCustomerService.execute({ name, email, phone });
  }

  private sendSuccessResponse(reply: FastifyReply, data: any) {
    reply.send(data);
  }

  private sendErrorResponse(reply: FastifyReply, statusCode: number, message: string) {
    reply.code(statusCode).send({ error: message });
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, phone } = request.body as { name: string; email: string; phone: string };

    try {
      const result = await this.createCustomer({ name, email, phone });
      this.sendSuccessResponse(reply, result);
    } catch (error) {
      const errorMessage = error.message || "Failed to create customer";
      this.sendErrorResponse(reply, 500, errorMessage);
    }
  }
}

export { CreateCustomerController };