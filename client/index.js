const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const { menuAwal } = require("../src/menus");
const Restitusi = require("../src/Restitusi");
const Sppd = require("../src/Sppd");

let sessions = {};

setInterval(() => {
  sessions = {};
  console.log(sessions);
}, 60000 * 12);

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
});

client.on("ready", () => {
  console.log("Client is ready!");
});

isSent = false;

client.on("message", async (msg) => {
  console.log(`Message from ${msg.from}: ${msg.body}`);
  chat = await msg.getChat();

  if (!sessions[msg.from]) {
    sessions[msg.from] = msg.from;
    console.log(`Session ${msg.from} telah disimpan.`);
    console.log(sessions);
    isSent = false;
  }

  if (!isSent || msg.body.toLocaleLowerCase() == "/menu") {
    await chat.sendMessage(menuAwal());
    isSent = true;
  }

  switch (msg.body.toLowerCase()) {
    case "1":
      await chat.sendMessage(Restitusi.menuGigi());
      break;
    case "2":
      await chat.sendMessage(Restitusi.menuRawatJalan());
      break;
    case "3":
      await chat.sendMessage(Restitusi.menuRawatInap());
      break;
    case "4":
      await chat.sendMessage(Restitusi.menuKacamata());
      break;
    case "5":
      await chat.sendMessage(Restitusi.faskesPDF());
      // isSent = false;
      break;

    // SPPD Menu
    case "6":
      await chat.sendMessage(Sppd.menuUtama());
      break;
    case "7":
      await chat.sendMessage(Sppd.pengajuanSppd());
      // isSent = false;
      break;
    default:
      break;
  }

  console.log(`isSent: ${isSent}`);
});

module.exports = client;
