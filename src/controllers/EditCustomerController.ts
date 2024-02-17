import { FastifyRequest, FastifyReply } from "fastify";
import { EditCustomerService } from "../services/EditCustomerService";
import prisma from "../prisma";

class EditCustomerController {
  private async editCustomer({ id, name, email, phone }: { id: string; name: string; email: string; phone: string }) {
    const editCustomerService = new EditCustomerService(prisma);
    return await editCustomerService.execute({ id, name, email, phone });
  }

  private sendSuccessResponse(reply: FastifyReply, data: any) {
    reply.send(data);
  }

  private sendErrorResponse(reply: FastifyReply, error: Error) {
    reply.code(500).send({ error: error.message });
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, name, email, phone } = request.body as { id: string; name: string; email: string; phone: string };

    try {
      const updatedCustomer = await this.editCustomer({ id, name, email, phone });
      this.sendSuccessResponse(reply, updatedCustomer);
    } catch (error) {
      if (error instanceof Error) {
        this.sendErrorResponse(reply, error);
      }
    }
  }
}

export { EditCustomerController };
