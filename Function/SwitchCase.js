let hari = "Senin Tanggal 03 Agustus 2023";

switch (hari) {
    case "Senin Tanggal 03 Agustus 2023":
        console.log("Tamu Check In.");
        break;
    case "Selasa Tanggal 04 Agustus 2023":
        console.log("Tamu Check Out.");
        break;
    case "Rabu Tanggal 05 Agustus 2023":
        console.log("Membeli Kebutuhan Fasilitas Tamu.");
        break;
    case "Kamis Tanggal 06 Agustus 2023":
        console.log("Waktunya Ganti Seprei.");
        break;
    case "Jumat Tanggal 07 Agustus 2023":
        console.log("Mengantar Seprei Ke Tukang Loundry.");
        break;
    case "Sabtu 08 Agustus 2023":
    case "Minggu":
        console.log("Melakukan Promosi Akhir Pekan.");
        break;
    default:
        console.log("Hari tidak valid.");
}
