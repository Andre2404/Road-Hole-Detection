// Fungsi untuk menghitung rata-rata angka dalam array
const hitungRataRata = (data) => {
  const total = data.reduce((acc, curr) => acc + curr, 0);
  return total / data.length;
};

// Cara pakai:
const suhuMotor = [45, 47, 44, 48, 50];
console.log("Rata-rata suhu:", hitungRataRata(suhuMotor));