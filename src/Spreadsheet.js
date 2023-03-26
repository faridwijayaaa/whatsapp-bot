const { GoogleSpreadsheet } = require("google-spreadsheet");
const { promisify } = require("util");

const credentials = require("../client_secret.json");

async function accessSpreedsheet() {
  const doc = new GoogleSpreadsheet(
    "1H91ooKhq3dqTLRhmXilU82u7YUKOuFxd6M2yi7j__WE"
  );
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  // rows = rows.map(a => a._rawData)
  console.log(rows);
}

accessSpreedsheet();
