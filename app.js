require("dotenv").config();
const express = require("express");
const { Server } = require("socket.io");
const { Client, LocalAuth } = require("whatsapp-web.js");
const http = require("http");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const qrcode = require("qrcode-terminal");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const ruanganRouter = require("./routes/ruangan");
const sesiRouter = require("./routes/sesi");
const sesiOneRouter = require("./routes/sesiOne");
const sesiSatuRouter = require("./routes/sesiSatuRealtime");
const waRouter = require("./routes/wa");
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
  SesiEmpatRealtime,
  SesiLimaRealtime,
  SesiEnamRealtime,
} = require("./models");
const sesiSatuRealtime = require("./models/sesiSatuRealtime");

const allowedOriginSocket = [
  "http://127.0.0.1:5500",
  "http://127.0.0.1:8000",
  "http://127.0.0.1:5173",
  "http://localhost:5173",
  "http://192.168.120.92:8000",
  "https://siruang.politeknikp3i-tasikmalaya.ac.id",
];

const app = express();
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

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/ruangan", ruanganRouter);
app.use("/sesi", sesiRouter);
app.use("/sesiSatu", sesiSatuRouter);
app.use("/", waRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
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
    const sesiEmpat = await SesiEmpatRealtime.findAll();
    const sesiLima = await SesiLimaRealtime.findAll();
    const sesiEnam = await SesiEnamRealtime.findAll();
    const data = {
      sesiSatu,
      sesiDua,
      sesiTiga,
      sesiEmpat,
      sesiLima,
      sesiEnam,
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

// Inisialisasi client WA
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    executablePath: require("puppeteer").executablePath(),
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("WhatsApp client is ready!");
});

client.initialize();
client.on("message", (message) => {
  console.log(`📥 Pesan MASUK dari ${message.from}: ${message.body}`);
});

client.on("message_create", (msg) => {
  console.log(`📤 Pesan KELUAR ke ${msg.to || msg.from}: ${msg.body}`);
});

module.exports = { app, server, client };
