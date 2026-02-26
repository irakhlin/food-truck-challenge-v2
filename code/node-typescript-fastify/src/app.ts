import Fastify, { FastifyInstance } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";


export const app = Fastify();

app.register(swagger, {
  openapi: {
    info: {
      title: "Food Truck Challenge API",
      version: "0.1.0",
      description: "SF Food Truck Challenge - Fastify + TypeScript",
    },
  },
});

app.register(swaggerUi, {
  routePrefix: "/docs",
});

async function routes(fastify: FastifyInstance) {
  fastify.get("/", async () => {
    // Placeholder for fetching food truck data
    return { message: "Hello, Food Truck Challenge!" };
  });
}


app.register(routes);
