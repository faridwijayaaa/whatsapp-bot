const { MessageMedia } = require("whatsapp-web.js");

class Restitusi {
  // static menuUtama() {
  //   return new Buttons(
  //     "Silahkan pilih salah satu menu di bawah untuk Informasi Selanjutnya atau Ketik *Menu* untuk kembali ke Menu Utama",
  //     [
  //       { body: "Informasi Syarat Reimburse" },
  //       { body: "Daftar Faskes Jawa Timur" },
  //     ],
  //     "Restitusi"
  //   );
  // }

  // static menuPertama() {
  //   return new Buttons(
  //     "Silahkan pilih salah satu Informasi tentang Syarat Reimburse atau Ketik *Menu* untuk kembali ke Menu Utama",
  //     [
  //       { body: "1.1 Gigi" },
  //       { body: "1.2 Rawat Jalan" },
  //       { body: "1.3 Rawat Inap" },
  //       { body: "1.4 Kacamata" },
  //     ],
  //     "Informasi Syarat Reimburse"
  //   );
  // }

  // static menuKedua() {
  //   return new Buttons(wwww
  //     "Silahkan klik tombol *Unduh PDF* di bawah untuk mengunduh file PDF atau Ketik *Menu* untuk kembali ke Menu Utama",
  //     [{ body: "Unduh PDF" }],
  //     "Daftar Faskes Jawa Timur"
  //   );
  // }

  static menuGigi() {
    return (
      "Informasi Syarat Reimburse Gigi\n" +
      "\n1. Regio Gigi\n2. Kwitansi, yang berisi tindakan yang dilakukan (Cabut, Tambal, Jenis Tambalan, Scaling). \n" +
      "3. Silahkan upload berkas anda di portalhc.pln.co.id \n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuRawatJalan() {
    return (
      "Informasi Syarat Reimburse Rawat Jalan\n" +
      "\nBerkas yang perlu disiapkan: \n" +
      "1. Kwitansi Pemeriksaan (Diagnosa)\n" +
      "2. Kwitansi Obat dan Copy Resep\n" +
      "3. Silahkan upload berkas anda di portalhc.pln.co.id \n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuRawatInap() {
    return (
      "Informasi Syarat Reimburse Rawat Inap\n" +
      "\nBerkas yang perlu disiapkan: \n" +
      "1. Resume Medis\n" +
      "2. Semua Hasil Lab\n" +
      "3. Kwitansi Pembayaran\n" +
      "4. Detail Resep Obat\n" +
      "5. Silahkan upload berkas anda di portalhc.pln.co.id \n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuKacamata() {
    return (
      "Informasi Syarat Reimburse Kacamata\n" +
      // "\nUntuk Pemeriksaan awal minimal  \n\n"+
      "\nBerkas yang perlu disiapkan: \n\n" +
      "1. Kwitansi Hasil Pemeriksaan Mata, Untuk hasil pemeriksaan awal minimal 0.5 baik silinder maupun minus\n" +
      "2. Kwitansi Rincian Pembelian Kacamata (Nominal lensa dan frame terpisah). \n" +
      "3. Silahkan upload berkas anda di portalhc.pln.co.id \n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static faskesPDF() {
    const media = MessageMedia.fromFilePath(
      "/home1/Programming/whatsapp-bot/doc/Daftar Provider Faskes Jatim_Juni2023.pdf"
    );
    return media;
  }
}

module.exports = Restitusi;
