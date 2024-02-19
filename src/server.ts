import fastify, { FastifyInstance } from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";
import "dotenv/config";
import { parse } from "path";

const createApp = (): FastifyInstance => {
  const app = fastify({ logger: true });

  app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ error: error.message });
  });

  return app;
};

const registerPlugins = async (app: FastifyInstance) => {
  await app.register(cors);
  await app.register(routes);
};

const startServer = async (app: FastifyInstance) => {
  try {
    await app.listen({ port: parseInt(process.env.PORT) || 3000 });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const start = async () => {
  const app = createApp();

  await registerPlugins(app);
  await startServer(app);
};

start();
