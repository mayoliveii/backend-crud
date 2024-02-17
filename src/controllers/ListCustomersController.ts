import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
  private listCustomersService: ListCustomersService;

  constructor() {
    this.listCustomersService = new ListCustomersService();
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await this.listCustomersService.execute(reply);
      reply.send(result);
    } catch (error) {
      reply.code(500).send({ error: "Failed to list customers" });
    }
  }
}

export { ListCustomersController };
