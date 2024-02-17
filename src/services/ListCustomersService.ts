import { PrismaClient } from "@prisma/client";
import { FastifyReply } from "fastify";

class ListCustomersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(reply: FastifyReply) {
    try {
      const customers = await this.prisma.customer.findMany();
      return customers;
    } catch (error) {
      reply.code(500).send({ error: "Failed to list customers" });
    }
  }
}

export { ListCustomersService };
