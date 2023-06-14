import http from "http";
import app from "./app";
import config from "./config";

import logger from "./utils/logger";
import swaggerDocs from "./utils/swagger";

const PORT = config.port || 9999;

const server = http.createServer(app);

process.env.NODE_ENV !== "production" &&
  server.on("listening", () =>
    logger.info(`Listening on port http://localhost:${PORT}`)
  );

server.listen(PORT, () => {
  swaggerDocs(app, Number(PORT));
});
