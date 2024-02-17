import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CustomerCraftProps {
  name: string;
  email: string;
  phone: string;
}

class CreateCustomerService {
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validatePhone(phone: string): boolean {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone);
  }

  async execute({ name, email, phone }: CustomerCraftProps) {
    if (!name || !email || !phone) {
      throw new Error("Name, email, and phone are required");
    }

    if (!this.validateEmail(email)) {
      throw new Error("Invalid email format");
    }

    if (!this.validatePhone(phone)) {
      throw new Error("Invalid phone format");
    }

    try {
      const customer = await prisma.customer.create({
        data: {
          name,
          email,
          phone,
        },
      });

      return customer;
    } catch (error) {
      throw new Error("Failed to create customer");
    }
  }
}

export { CreateCustomerService };