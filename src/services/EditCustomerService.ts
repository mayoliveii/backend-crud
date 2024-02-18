import { PrismaClient } from "@prisma/client";

interface EditCustomerProps {
  id: string;
  name: string;
  email: string;
  phone: string;
}

class EditCustomerService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async execute({ id, name, email, phone }: EditCustomerProps) {
    if (!id || !name || !email) {
      throw new Error("Id, name, and email are required");
    }

    const finderCustomer = await this.prisma.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!finderCustomer) {
      throw new Error("Customer not found");
    }

    const updatedCustomer = await this.prisma.customer.update({
      where: {
        id: finderCustomer.id,
      },
      data: {
        name,
        email,
        phone,
        updated_at: new Date(),
      },
    });

    return updatedCustomer;
  }
}

export { EditCustomerService };
