const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const helloRouter = require("./routes/hello");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routers
app.use("/", helloRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
