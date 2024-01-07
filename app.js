const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "./.env") });
const responseCode = require("./server/utils/response-code");
const responseMessage = require("./server/utils/response-message");
var createError = require("http-errors");
var express = require("express");
var router = require("./server/routes/index");
const helmet = require("helmet");
const noCache = require("nocache");

var app = express();

var compression = require("compression");
app.use(compression());
app.use(helmet());
app.use(noCache());



app.use(express.json({ limit: "20mb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);

router(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (
    err.status == responseCode.ENTITY_PARSE_FAILED &&
    err.type == "entity.parse.failed"
  ) {
    err.message = responseMessage[responseCode.ENTITY_PARSE_FAILED];
    res.json({
      code: err.status,
      message: err.message,
      data: {},
    });
    return;
  } else if (
    err.status == responseCode.ENTITY_TOO_LARGE &&
    err.type == "entity.too.large"
  ) {
    err.message = responseMessage[responseCode.ENTITY_TOO_LARGE];
    res.json({
      code: err.status,
      message: err.message,
      data: {},
    });
    return;
  }
  // res.render('error');
  res.json({
    code: err.status,
    message: "Some Internal Error",
    data: {},
  });
});

module.exports = app;
