const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const sequelize = require("./dbConnection");

const server = express();

server.use(cors());
server.use(bodyParser.json());

//Routes
server.use("api/users", userRoutes);
server.use("api/messages", messageRoutes);

// Database Sync
sequelize
  .sync({ alter: true })
  .then(() => console.log("database synced successfully"))
  .catch((err) => console.log('Error syncing database:',err));

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
