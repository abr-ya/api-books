const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const helloRouter = require("./routes/hello");
const booksRouter = require("./routes/books");
const db = require("./data/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routers and data
app.db = db;
app.use("/", helloRouter);
app.use("/books", booksRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
