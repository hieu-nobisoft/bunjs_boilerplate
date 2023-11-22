
import logger from "#logger";
import app from "#app";

const containerId = process.env.HOSTNAME;


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
process.on("SIGINT", function () {
  logger.info(`Terminated (SIGINT): ${containerId}`);
  process.exit(0);
});

process.on("SIGTERM", () => {
  logger.info(`Terminated (SIGTERM): ${containerId}`);
  process.exit(0);
});
