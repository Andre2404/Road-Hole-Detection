# 🛣️ Aplikasi Deteksi Jalan Berlubang  
**Ujian Akhir Semester – Pengolahan Citra Digital**

Aplikasi ini merupakan proyek UAS mata kuliah **Pengolahan Citra Digital (PCGK)** yang bertujuan untuk mendeteksi dan menganalisis kondisi jalan berlubang menggunakan teknik pengolahan citra digital klasik, tanpa menggunakan deep learning.

---

## 🎯 Tujuan Proyek
- Mendeteksi keberadaan lubang pada permukaan jalan dari citra digital
- Menghitung tingkat kerusakan jalan berdasarkan luas area lubang
- Mengklasifikasikan kondisi jalan menjadi:
  - Rusak Ringan
  - Rusak Sedang
  - Rusak Berat
- Menampilkan hasil analisis secara visual dan informatif melalui antarmuka web

---

## 🧠 Metode Pengolahan Citra
Aplikasi ini menerapkan tahapan pengolahan citra digital sebagai berikut:

1. **Resize Citra**
2. **Region of Interest (ROI)**  
   Fokus pada bagian bawah citra yang diasumsikan sebagai area jalan
3. **Konversi Grayscale**
4. **Gaussian Blur**  
   Mengurangi noise pada citra
5. **Thresholding OTSU**  
   Segmentasi area gelap (lubang)
6. **Operasi Morfologi**  
   (Opening & Closing) untuk membersihkan hasil segmentasi
7. **Deteksi Kontur**
8. **Klasifikasi Ukuran Lubang**
   - Lubang kecil
   - Lubang sedang
   - Lubang besar
9. **Klasifikasi Kondisi Jalan**
   Berdasarkan persentase luas kerusakan terhadap area ROI

---

## 🖥️ Fitur Aplikasi
- Upload citra jalan (JPG / PNG)
- Menampilkan citra input
- Menampilkan hasil analisis:
  - Kondisi jalan
  - Persentase kerusakan
  - Jumlah lubang kecil, sedang, dan besar
- Antarmuka web berbasis **Streamlit**
- Visualisasi tahapan pengolahan citra (untuk keperluan akademik)

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

