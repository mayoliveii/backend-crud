import { PrismaClient } from "@prisma/client";
import { FastifyReply } from "fastify";

interface ListCustomersProps {
  orderBy?: 'created_at_ASC' | 'created_at_DESC' | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
  search?: string | undefined;
}

class ListCustomersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute({ orderBy, startDate, endDate, search }: ListCustomersProps, reply: FastifyReply) {
    try {
      const customers = await this.prisma.customer.findMany({
        where: {
          created_at: {
            gte: startDate ? new Date(startDate) : undefined,
            lte: endDate ? new Date(endDate) : undefined,
          },
          AND: search
            ? {
                OR: [
                  { name: { contains: search } },
                  { email: { contains: search } },
                ],
              }
            : undefined,
        },
        orderBy: orderBy
          ? {
              created_at: orderBy === 'created_at_ASC' ? 'asc' : 'desc',
            }
          : undefined,
      });
  
      return customers;
    } catch (error: any) {
      reply.code(500).send({ error: `Failed to list customers. Error details: ${error.message}` });
    }
  }
  
}

export { ListCustomersService };
