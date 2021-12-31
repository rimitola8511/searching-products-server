require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const items = require("./routes/items");
const categories = require("./routes/categories");
const notFound = require("./middleware/NotFound");
const errorHandlerMiddleware = require("./middleware/ErrorHandler");

// config cors
app.use(cors());

// config middelware
app.use(express.json());

// routes
app.use("/api/items", items);
app.use("/api/categories", categories);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const startServer = () => {
  app.listen(port, console.log(`Server listening on port ${port}...`));
};

startServer();
