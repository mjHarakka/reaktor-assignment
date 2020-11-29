const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const jacketsRouter = require("./controllers/jackets");
const shirtsRouter = require("./controllers/shirts");
const accessoriesRouter = require("./controllers/accessories");

app.use(cors());
app.use(express.json());
app.use(express.static('build'))

morgan.token("token", (req, res) => res.resBody);

app.use(
  morgan(
    ":method :status :url: :status :res[content-length] - :response-time ms :token"
  )
);

app.use("/api/jackets", jacketsRouter);
app.use("/api/shirts", shirtsRouter);
app.use("/api/accessories", accessoriesRouter);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
