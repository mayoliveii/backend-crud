import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
  private listCustomersService: ListCustomersService;

  constructor() {
    this.listCustomersService = new ListCustomersService();
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { orderBy, startDate, endDate, search } = request.query as {
        orderBy?: 'created_at_ASC' | 'created_at_DESC' | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
        search?: string | undefined;
      };
      
      const result = await this.listCustomersService.execute({ orderBy, startDate, endDate, search }, reply);
      reply.send(result);
    } catch (error) {
      const errorMessage = error.message || "Failed to list customers";
      reply.code(500).send({ error: errorMessage });
    }
  }
}

export { ListCustomersController };
