import { Express, Request, Response } from "express";
import swaggerJsDocs from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";
import logger from "./logger";
import auth from "../apis/middlewares/auth.middleware";

const options: swaggerJsDocs.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Perzsi Backend API Docs",
      version,
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          scheme: "bearer",
          name: "authorization",
          bearerFormat: "JWT",
          in: "header",
        },
      },

      security: [
        {
          bearerAuth: [],
        },
      ],
    },
  },

  apis: [
    "./src/apis/routes/*.ts",
    "./src/apis/routes/users/*.ts",
    "./src/models/users/*.ts",
  ],
};

const specs = swaggerJsDocs(options);

function swaggerDocs(app: Express, port: number) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

  // Swagger JSON
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(specs);
  });

  logger.info(`Swagger docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
