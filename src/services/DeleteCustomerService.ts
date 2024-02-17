import prismaClient from '../prisma';

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error('Id is required');
    }

    const foundCustomer = await prismaClient.customer.findUnique({
      where: {
        id,
      },
    });

    if (!foundCustomer) {
      throw { id, message: 'Customer not found' };
    }

    await prismaClient.customer.updateMany({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    return { id, message: 'Customer deleted successfully' };
  }
}

export { DeleteCustomerService };
