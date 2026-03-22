const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/ServerConfig");
const ApiRoutes = require("./routes/index");
const db = require("./models/index");

const setUpAndStartServer = () => {
  const app = express();

  const cors = require("cors");

  app.use(
    cors({
      origin: "http://localhost:5173", // your Vite frontend URL
      credentials: true, // needed for httpOnly cookies
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  );

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server is up and runnning on ${PORT}`);

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};
setUpAndStartServer();
