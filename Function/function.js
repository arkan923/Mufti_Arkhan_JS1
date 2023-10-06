// Contoh Fungsi Tanpa Parameter
function MenyapaTamu() {
  console.log(
    "Selamat datang di penginapan kami! Semoga Anda menikmati fasilitas kami."
  );
}

// Memanggil Fungsi Tanpa Parameter
MenyapaTamu();

// Contoh Fungsi dengan Parameter
function tambah(angka1, angka2) {
  let hasil = angka1 + angka2;
  return hasil;
}

// Memanggil Fungsi dengan Parameter
let hasilPenambahan = tambah(55, 80);
console.log("Hasil penambahan: " + hasilPenambahan);
