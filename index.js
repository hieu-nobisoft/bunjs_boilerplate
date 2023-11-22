
import logger from "#logger";
import app from "#app";

const containerId = process.env.HOSTNAME;

const main = async () => {
  app()
};

main();

process.on("SIGINT", function () {
  logger.info(`Terminated (SIGINT): ${containerId}`);
  process.exit(0);
});

process.on("SIGTERM", () => {
  logger.info(`Terminated (SIGTERM): ${containerId}`);
  process.exit(0);
});
