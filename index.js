const clients = require("./client");
const { accessSpreedsheet } = require("./src/Spreadsheet");

accessSpreedsheet();
clients.initialize();
