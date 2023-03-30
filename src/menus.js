function menuAwal() {
  let greetings =
    "Hai, Sahabat DeVA yang berbahagia \nAda yang bisa kami bantu ? \n\n";
  let introduce =
    "Silahkan Ketik Fitur/Jenis Layanan Informasi yang anda butuhkan : \n\n";

  let restitusi = "*Menu Restitusi*\n";
  let reimburse = {
    utama: "Informasi Syarat Reimburse : \n",
    gigi: "1. Pemeriksaan Gigi\n",
    rawatJalan: "2. Rawat Jalan\n",
    rawatInap: "3. Rawat Inap\n",
    kacamata: "4. Kacamata\n\n",
  };
  let faskes = {
    header: "Daftar Faskes Jawa Timur : \n",
    body: "5. Unduh Daftar Faskes PDF\n\n",
  };

  let sppd = {
    header: "*Menu SPPD*\n",
    information: "6. Informasi SPPD\n",
    body: "7. Pengajuan SPPD\n\n",
  };

  let footer =
    "Cara pilih Fitur atau Jenis Layanan dengan cara, Ketik nomor yang tertera pada Jenis Layanan yang dipilih.\n" +
    "Contoh: Ketik *1* untuk memilih menu Pemeriksaan Gigi.";

  return (
    greetings +
    introduce +
    restitusi +
    reimburse.utama +
    reimburse.gigi +
    reimburse.rawatJalan +
    reimburse.rawatInap +
    reimburse.kacamata +
    faskes.header +
    faskes.body +
    sppd.header +
    sppd.information +
    sppd.body +
    footer
  );
}

module.exports = { menuAwal };
