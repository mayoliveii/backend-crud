import prismaClient from '../prisma';

interface GetCustomerByIdProps {
  id: string;
}

class GetCustomerByIdService {
  async execute({ id }: GetCustomerByIdProps) {
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

    return foundCustomer;
  }
}

export { GetCustomerByIdService };