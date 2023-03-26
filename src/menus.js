function menuAwal() {
  let greetings =
    "⚡ Selamat Datang di Layanan Online SDM \n⚡ PLN UP3 Kediri\n\n";
  let introduce = "Silahkan Ketik Fitur/Jenis layanan kami : \n\n";

  let restitusi = "*Menu Restitusi*\n";
  let reimburse = {
    utama: "Informasi Syarat Reimburse : \n",
    gigi: "/Gigi\n",
    rawatJalan: "/RawatJalan\n",
    rawatInap: "/RawatInap\n",
    kacamata: "/Kacamata\n\n",
  };
  let faskes = {
    header: "Daftar Faskes Jawa Timur : \n",
    body: "/UnduhDaftarFaskes\n\n",
  };

  let sppd = {
    header: "*Menu SPPD*\n",
    information: "/InformasiSppd\n",
    body: "/PengajuanSppd\n\n",
  };

  let footer =
    "Cara pilih Fitur atau Jenis Layanan dengan cara, Ketik yang ada tanda '/'\n" +
    "Contoh: Ketik */Gigi* dan Kirim ke Nomor WA ini.";

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
