const { MessageMedia } = require("whatsapp-web.js");

class profilePegawai {
  static penambahanAnggotaKeluarga() {
    const media = MessageMedia.fromFilePath(
      "/home1/Programming/whatsapp-bot/doc/FORM_DPEG002_01_PERUBAHAN_DATA_KELUARGA_v3.pdf"
    );
    return media;
  }

  static updatePendidikanTerakhir() {
    return (
      "*Update Pendidikan Terakhir*\n\n" +
      "Untuk melakukan update pendidikan terakhir, ada beberapa tahapan berikut tahapannya : \n\n" +
      "1. Mengisikan Formulir yang disediakan\n" +
      "2. Melakukan Upload File Ijazah dan Transkrip Nilai\n\n" +
      "Silahkan akses link berikut untuk melakukan update pendidikan terakhir https://forms.gle/ysAKiKmaKx3dCfVY8 " +
      "atau Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }
}

module.exports = profilePegawai;
