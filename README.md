# 📊 Portfolio Data Analyst - Panduan Setup

## 📁 Struktur Folder

Buat struktur folder seperti ini:

```
portfolio-data-analyst/
│
├── index.html                 # File HTML utama
├── styles.css                 # File CSS styling
├── script.js                  # File JavaScript
│
└── images/                    # Folder untuk semua gambar
    ├── profile.jpg            # Foto profil kamu
    │
    └── charts/                # Sub-folder untuk chart/grafik
        ├── sales-trend.png
        ├── category-performance.png
        ├── conversion-funnel.png
        ├── loading-time-impact.png
        ├── rfm-segments.png
        ├── clv-distribution.png
        ├── abc-analysis.png
        ├── demand-forecast.png
        └── stockout-analysis.png
```

---

## 🚀 Cara Setup

### 1. Buat Folder Structure

```bash
# Di terminal/command prompt
mkdir portfolio-data-analyst
cd portfolio-data-analyst
mkdir images
mkdir images/charts
```

Atau buat manual di File Explorer/Finder:
- Buat folder `portfolio-data-analyst`
- Di dalamnya buat folder `images`
- Di dalam `images` buat folder `charts`

---

### 2. Copy File Code

Simpan 3 file utama di folder `portfolio-data-analyst`:

- **index.html** - HTML utama
- **styles.css** - Styling
- **script.js** - JavaScript interaktif

---

### 3. Tambahkan Gambar

#### **Foto Profil:**
- Simpan foto profil kamu sebagai `profile.jpg` di folder `images/`
- Format yang didukung: JPG, PNG, GIF
- Rekomendasi ukuran: 500x500px (square/persegi)

#### **Chart/Grafik:**
Simpan semua grafik analisis kamu di folder `images/charts/` dengan nama:

**Untuk Laporan Sales Analysis:**
- `sales-trend.png` - Grafik trend penjualan
- `category-performance.png` - Performance per kategori
- `conversion-funnel.png` - Funnel analysis
- `loading-time-impact.png` - Impact loading time

**Untuk Laporan Customer Segmentation:**
- `rfm-segments.png` - RFM segmentation
- `clv-distribution.png` - Customer lifetime value

**Untuk Laporan Inventory:**
- `abc-analysis.png` - ABC classification
- `demand-forecast.png` - Demand forecasting
- `stockout-analysis.png` - Stockout pattern

> 💡 **Tips:** Kamu bisa export grafik dari Tableau, Power BI, Python (matplotlib/seaborn), atau Excel sebagai PNG/JPG

---

### 4. Custom Nama File Gambar (Opsional)

Kalau mau pakai nama file sendiri, edit di `index.html`:

```html
<!-- Contoh: ganti dari -->
<img src="images/charts/sales-trend.png" alt="Sales Trend">

<!-- Menjadi -->
<img src="images/charts/grafik-penjualan-q3.png" alt="Sales Trend">
```

---

## 📝 Format Gambar yang Disarankan

### Foto Profil:
- **Format:** JPG atau PNG
- **Ukuran:** 500x500px (1:1 ratio)
- **File size:** < 500KB untuk loading cepat

### Chart/Grafik:
- **Format:** PNG (untuk grafik dengan background transparan) atau JPG
- **Ukuran:** 800x500px atau 1200x750px
- **File size:** < 1MB per file
- **Resolusi:** 72-150 DPI (cukup untuk web)

---

## 🎨 Tips Export Grafik dari Tools

### **Dari Tableau:**
1. Klik dashboard/worksheet
2. Worksheet → Export → Image
3. Pilih PNG format
4. Simpan dengan nama sesuai

### **Dari Python (Matplotlib/Seaborn):**
```python
import matplotlib.pyplot as plt

# Setelah buat plot
plt.savefig('images/charts/sales-trend.png', dpi=150, bbox_inches='tight')
```

### **Dari Power BI:**
1. Klik visual yang mau di-export
2. More options (...) → Export data → Image
3. Simpan sebagai PNG

### **Dari Excel:**
1. Select chart
2. Right click → Save as Picture
3. Pilih PNG format

---

## ✅ Checklist Setup

- [ ] Folder `portfolio-data-analyst` sudah dibuat
- [ ] Folder `images` dan `images/charts` sudah dibuat
- [ ] File `index.html` sudah disimpan
- [ ] File `styles.css` sudah disimpan
- [ ] File `script.js` sudah disimpan
- [ ] Foto profil (`profile.jpg`) sudah ada di folder `images/`
- [ ] Semua grafik chart sudah ada di folder `images/charts/`
- [ ] Test buka `index.html` di browser

---

## 🔧 Troubleshooting

### Gambar tidak muncul?
1. **Cek nama file** - harus sama persis (case-sensitive di Linux/Mac)
2. **Cek lokasi folder** - pastikan struktur folder benar
3. **Cek format file** - gunakan .jpg, .png, atau .gif
4. **Buka di browser lain** - kadang cache browser bikin masalah

### Grafik pecah/blur?
- Gunakan resolusi minimal 800x500px
- Export dengan DPI 150 atau lebih
- Gunakan PNG untuk kualitas lebih baik

### File size terlalu besar?
- Compress gambar online (tinypng.com, compressor.io)
- Resize ke ukuran yang sesuai (jangan terlalu besar)
- Convert ke WebP format (opsional)

---

## 🌐 Deploy Online (Opsional)

Setelah semua setup, kamu bisa upload portfolio ke:

1. **GitHub Pages** (Gratis)
   - Upload semua file ke GitHub repository
   - Enable GitHub Pages di Settings

2. **Netlify** (Gratis)
   - Drag & drop folder ke netlify.com
   - Langsung online dalam 1 menit

3. **Vercel** (Gratis)
   - Connect dengan GitHub
   - Auto-deploy setiap update

---

## 📧 Kontak

Jangan lupa update info kontak di `index.html`:
- Email
- LinkedIn
- GitHub
- Tableau Public

---

**Happy Coding! 🚀**
