require("dotenv").config();
var express = require("express");
const { Server } = require("socket.io");
const http = require("http");
var path = require("path");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var ruanganRouter = require("./routes/ruangan");
var sesiRouter = require("./routes/sesi");
var sesiOneRouter = require("./routes/sesiOne");
const { Ruang } = require("./models");
const ruang = require("./models/ruang");

const {
  SesiOne,
  SesiTwo,
  SesiThree,
  SesiFour,
  SesiFive,
  SesiSix,
  Satu,
  SesiSatuRealtime,
  SesiDuaRealtime,
  SesiTigaRealtime,
} = require("./models");

const allowedOriginSocket = [
  "http://127.0.0.1:5500",
  "http://127.0.0.1:8000",
  "http://127.0.0.1:5173",
  "http://localhost:5173",
  "http://192.168.120.92:8000",
];

var app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: allowedOriginSocket,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  },
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/ruangan", ruanganRouter);
app.use("/sesi", sesiRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("getRooms", async (response) => {
    const satu = await SesiOne.findAll();
    const dua = await SesiTwo.findAll();
    const tiga = await SesiThree.findAll();
    const empat = await SesiFour.findAll();
    const lima = await SesiFive.findAll();
    const enam = await SesiSix.findAll();
    const data = {
      satu,
      dua,
      tiga,
      empat,
      lima,
      enam,
    };
    io.emit("Rooms", data);
  });

  socket.on("getSesi", async (response) => {
    const sesiSatu = await SesiSatuRealtime.findAll();
    const sesiDua = await SesiDuaRealtime.findAll();
    const sesiTiga = await SesiTigaRealtime.findAll();
    const data = {
      sesiSatu,
      sesiDua,
      sesiTiga,
    };
    io.emit("Sesis", data);
  });

  socket.on("getBooking", async (response) => {
    const bookingSatu = await Satu.findAll();
    const data = {
      bookingSatu,
    };
    io.emit("Booking", data);
  });

  socket.on("reloadRoom", async (response) => {
    io.emit("reloadAll", true);
  });
});

module.exports = { app, server };
