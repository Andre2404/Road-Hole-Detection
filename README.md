# 🛣️ Aplikasi Deteksi Jalan Berlubang  
**Ujian Akhir Semester – Pengolahan Citra Digital**

Aplikasi ini merupakan proyek UAS mata kuliah **Pengolahan Citra Digital (PCGK)** yang bertujuan untuk mendeteksi dan menganalisis kondisi jalan berlubang menggunakan teknik pengolahan citra digital klasik, tanpa menggunakan deep learning.

---

## 🎯 Tujuan Proyek
- Mendeteksi keberadaan lubang pada permukaan jalan dari citra digital
- Menghitung tingkat kerusakan jalan berdasarkan luas area lubang
- Mengklasifikasikan kondisi jalan menjadi:
  - Sangat Baik (< 3% kerusakan)
  - Rusak Sedang (3-15% kerusakan)
  - Rusak Parah (> 15% kerusakan)
- Menampilkan hasil analisis secara visual dan informatif melalui antarmuka web

---

## 🧠 Metode Pengolahan Citra
Aplikasi ini menerapkan tahapan pengolahan citra digital sebagai berikut:

1. **Resize Citra** – Standarisasi ukuran (800x600)
2. **Region of Interest (ROI)** – Fokus pada area aspal
3. **Bilateral Filter** – Menghilangkan bayangan halus tapi jaga tepi lubang
4. **CLAHE** – Meningkatkan kontras area gelap
5. **Adaptive Threshold** – Segmentasi lubang
6. **Operasi Morfologi** – Menyambung kontur yang terpecah
7. **Deteksi Kontur** – Menemukan setiap lubang
8. **Filter Solidity & Rasio** – Mengeliminasi noise
9. **Klasifikasi Ukuran** – Kategori lubang (kecil/sedang/besar)
10. **Scoring Kondisi** – Penilaian keseluruhan

---

## 🖥️ Fitur Aplikasi
✨ **Modern & Responsive UI**
- Upload citra jalan dengan drag-and-drop
- Desain feminine modern dengan warna gradient
- Antarmuka yang user-friendly

📊 **Analisis Komprehensif**
- Status kondisi jalan
- Persentase kerusakan dengan circular progress
- Jumlah lubang per kategori (kecil/sedang/besar)
- Total lubang yang terdeteksi

🔬 **Visualisasi Proses**
- ROI (Region of Interest)
- Grayscale + CLAHE
- Adaptive Threshold
- Morfologi (hasil akhir)
- Citra dengan kontur yang terdeteksi

---

## ⚡ Tech Stack
- **Backend:** Flask (Python)
- **Image Processing:** OpenCV, NumPy
- **Frontend:** Bootstrap 5 + Custom CSS
- **Icons:** Font Awesome 6.4

---

## 💡 Tips
- Gunakan gambar jalan yang jelas untuk hasil terbaik
- Pastikan pencahayaan cukup untuk deteksi optimal
- Foto tegak lurus ke permukaan jalan memberikan hasil lebih baik
- Gunakan resolusi minimal 640x480 pixel

---

## 📂 Struktur Folder

```text
PCGK-UAS/
├── app.py
├── src/
│   └── main.py
├── dataset/
├── .gitignore
├── requirements.txt
└── README.md


