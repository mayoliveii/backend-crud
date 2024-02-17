import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { EditCustomerController } from "./controllers/EditCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.post("/create-customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply);
  });

  fastify.get("/list-customers", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomersController().handle(request, reply);
  });

  fastify.delete("/delete-customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply);
  });

  fastify.post("/edit-customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new EditCustomerController().handle(request, reply);
  });
}