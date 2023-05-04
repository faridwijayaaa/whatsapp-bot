const { GoogleSpreadsheet } = require("google-spreadsheet");
const { promisify } = require("util");
const fs = require("fs");
const ExcelJS = require("exceljs");
const delay = require("delay");
const clients = require("../client");
const { MessageMedia } = require("whatsapp-web.js");

const credentials = require("../client_secret.json");

const doc = new GoogleSpreadsheet(
  "1H91ooKhq3dqTLRhmXilU82u7YUKOuFxd6M2yi7j__WE"
);

const docProfilePegawai = new GoogleSpreadsheet(
  "1DKD6SiEhG_NKSlc15r-n79SVSr-FYO9Mekaxi1wltSE"
);

const sheetNumber = 0;

let i = 1;
async function accessSpreedsheet() {
  // !! Excel from Pengajuan SPPD = #1
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[sheetNumber];
  let currentRowCount = sheet.rowCount;

  // !! Excel from Updated Pendidikan Terakhir = #2
  await docProfilePegawai.useServiceAccountAuth(credentials);
  await docProfilePegawai.loadInfo();
  const sheetProfilePegawai = docProfilePegawai.sheetsByIndex[sheetNumber];
  let currentRowCountPP = sheetProfilePegawai.rowCount;

  do {
    await delay(2000);
    // # 1
    await sheet.loadCells();
    const newRowCount = sheet.rowCount;

    if (newRowCount > currentRowCount) {
      await sheet.loadHeaderRow();
      console.log(`New row added at index ${newRowCount - 1}`);
      // console.log(clients);

      let indexNewRow = parseInt(newRowCount.toString().substring(1) - 2);
      const newRow = await sheet.getRows();

      let timeStamp = newRow[indexNewRow]._rawData[0];
      let nip = newRow[indexNewRow]._rawData[1];
      let nama = newRow[indexNewRow]._rawData[2];
      let nim = newRow[indexNewRow]._rawData[3];
      let uploadFile = newRow[indexNewRow]._rawData[4];
      let endDate = newRow[indexNewRow]._rawData[5];
      let tujuan = newRow[indexNewRow]._rawData[6];
      let alasan = newRow[indexNewRow]._rawData[7];
      let jenisSppd = newRow[indexNewRow]._rawData[8];
      let kendaraan = newRow[indexNewRow]._rawData[9];
      let klaimHotel = newRow[indexNewRow]._rawData[10];
      let uploadSurat = newRow[indexNewRow]._rawData[11];
      let uploadFormSppd = newRow[indexNewRow]._rawData[12];

      // Buat file Excel baru dan tambahkan data pada row ke sheet Excel
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet1");

      worksheet.getCell("A1").value = "Timestamp";
      worksheet.getCell("A2").value = timeStamp;
      // worksheet.getCell('B1').value = 'NIP :';
      // worksheet.getCell('B2').value = nip;
      worksheet.getCell("C1").value = "Nama";
      worksheet.getCell("C2").value = nama;
      worksheet.getCell("D1").value = "NIM";
      worksheet.getCell("D2").value = nim;
      worksheet.getCell("E1").value = "Upload File";
      worksheet.getCell("E2").value = uploadFile;
      // worksheet.getCell("F1").value = "Tanggal End :";
      // worksheet.getCell("F2").value = endDate;
      // worksheet.getCell("G1").value = "Tujuan :";
      // worksheet.getCell("G2").value = tujuan;
      // worksheet.getCell("H1").value = "Alasan :";
      // worksheet.getCell("H2").value = alasan;
      // worksheet.getCell("I1").value = "Jenis SPPD :";
      // worksheet.getCell("I2").value = jenisSppd;
      // worksheet.getCell("J1").value = "Kendaraan :";
      // worksheet.getCell("J2").value = kendaraan;
      // worksheet.getCell("K1").value = "Klaim Hotel :";
      // worksheet.getCell("K2").value = klaimHotel;
      // worksheet.getCell("L1").value = "Surat :";
      // worksheet.getCell("L2").value = uploadSurat;
      // worksheet.getCell("M1").value = "Form SPPD :";
      // worksheet.getCell("M2").value = uploadFormSppd;

      // Simpan file Excel di dalam direktori lokal
      await workbook.xlsx.writeFile(`./src/${nim}.xlsx`);

      const sendData = async () => {
        result = await MessageMedia.fromFilePath(`./src/${nim}.xlsx`);
        await clients.sendMessage(
          "6281231832512@c.us",
          "Ada yang ngajuin SPPD baru nichhh!!! 😗"
        );
        await clients.sendMessage("6281231832512@c.us", result);
        console.log("pesan berhasil dikirim");
        removeHandler();
      };

      const removeHandler = async () => {
        await fs.unlink(`./src/${nim}.xlsx`, (err) => {
          if (err) throw err;
          console.log("File deleted");
        });

        return result;
      };

      sendData();

      currentRowCount++;
    } else {
      // console.log("belum ada data baru");
    }

    // # 2
    await sheetProfilePegawai.loadCells();
    const newRowCountPP = sheetProfilePegawai.rowCount;

    if (newRowCountPP > currentRowCountPP) {
      await sheetProfilePegawai.loadHeaderRow();
      console.log(`New row added at index ${newRowCountPP - 1}`);
      // console.log(clients);

      let indexNewRow = parseInt(newRowCountPP.toString().substring(1) - 2);
      const newRow = await sheetProfilePegawai.getRows();

      let timeStamp = newRow[indexNewRow]._rawData[0];
      let nama = newRow[indexNewRow]._rawData[1];
      let nip = newRow[indexNewRow]._rawData[2];
      let unit = newRow[indexNewRow]._rawData[3];
      let uploadTranskip = newRow[indexNewRow]._rawData[4];
      let uploadIjazah = newRow[indexNewRow]._rawData[5];

      // Buat file Excel baru dan tambahkan data pada row ke sheet Excel
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet1");

      worksheet.getCell("A1").value = "Timestamp";
      worksheet.getCell("A2").value = timeStamp;
      worksheet.getCell("B1").value = "Nama";
      worksheet.getCell("B2").value = nama;
      worksheet.getCell("C1").value = "NIP";
      worksheet.getCell("C2").value = nip;
      worksheet.getCell("D1").value = "Unit";
      worksheet.getCell("D2").value = unit;
      worksheet.getCell("E1").value = "Upload Transkip";
      worksheet.getCell("E2").value = uploadTranskip;
      worksheet.getCell("F1").value = "Upload Ijazah";
      worksheet.getCell("F2").value = uploadIjazah;

      // Simpan file Excel di dalam direktori lokal
      await workbook.xlsx.writeFile(`./src/UpdatePendidikan_${nip}.xlsx`);

      const sendData = async () => {
        result = await MessageMedia.fromFilePath(
          `./src/UpdatePendidikan_${nip}.xlsx`
        );
        await clients.sendMessage(
          "6281231832512@c.us",
          "Ada yang Update Pendidikan terbaru nichhh!!! 😗"
        );
        await clients.sendMessage("6281231832512@c.us", result);
        console.log("pesan berhasil dikirim");
        removeHandler();
      };

      const removeHandler = async () => {
        await fs.unlink(`./src/UpdatePendidikan_${nip}.xlsx`, (err) => {
          if (err) throw err;
          console.log("File deleted");
        });

        return result;
      };

      sendData();

      currentRowCountPP++;
    } else {
      // console.log("belum ada data baru");
    }
  } while ((i = 1));
}

module.exports = { accessSpreedsheet };
