var express = require("express");
var router = require("./server/routes/index");
const noCache = require("nocache");
var cors = require("cors");

var app = express();
app.use(noCache());
app.use(cors());

app.use(express.json({ limit: "20mb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);

router(app);

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
