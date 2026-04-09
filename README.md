# 🌟 MZKYZAK - React Interactive Portfolio

![Portfolio Preview](https://via.placeholder.com/1200x600/030014/3b82f6?text=MZKYZAK+React+Portfolio)
*Silakan ganti link gambar di atas dengan screenshot asli website kamu.*

Website portfolio pribadi yang dibangun dengan **React.js**. Dirancang untuk menampilkan profil, *skill*, *project*, sertifikat, serta kontak dengan antarmuka yang modern, animasi dinamis, dan desain yang responsif di segala perangkat.

**🚀 Live Preview:** [portfolio-mzkyzak.vercel.app](https://portfolio-mzkyzak.vercel.app/)

---

## ⚠️ Known Issues (Catatan Bug)
Proyek ini masih dalam tahap pengembangan aktif. Beberapa *bug* yang sedang dalam tahap perbaikan untuk *update* berikutnya:
- 🐛 **UI/UX Bug:** Kendala pada navigasi Tab (khusus pengguna Android).
- 🐛 **Layout Bug:** Sedikit *glitch* pada bagian *username* mzkyzak dan tata letak *navbar*.

---

## ✨ Fitur Utama

**🧑 Hero Section**
- Menampilkan nama & *personal branding*.
- *Typing text animation* yang berjalan mulus.
- CTA (*Call to Action*): Navigasi cepat ke Portfolio & Profile.
- *Background* animasi bintang dengan efek *spotlight mouse*.

**👤 About Me**
- Foto profil interaktif dengan *glow effect*.
- Informasi detail terkait lokasi, pendidikan, dan kepribadian.
- Statistik ringkas: Jumlah *project* & sertifikat.
- Tombol unduh CV terintegrasi.

**💼 Portfolio**
- Sistem navigasi Tab mulus (tanpa *reload*):
  - Projects
  - Certificates
  - Tech Stack
  - Design Tools
  - Operating System
- *Preview project* interaktif dengan fitur *slider* gambar.
- *Modal pop-up* untuk melihat detail *project* secara mendalam.

**📋 Certificates**
- Galeri sertifikat dengan desain rapi & konsisten.
- Muncul dinamis menggunakan animasi saat di-*scroll*.

**🛠 Tech, Design & OS**
- **Tech Stack:** Frontend & *tools* *coding* sehari-hari dengan ikon interaktif.
- **Design Tools:** Figma, Unity, Canva, Lightroom, CapCut.
- **Operating System:** Windows, Android, Ubuntu, Linux.

**✉️ Contact & Social Media**
- Terintegrasi dengan LinkedIn, WhatsApp, Instagram, GitHub, TikTok, dan YouTube.
- **Active Contact Form:** Pesan formulir langsung diteruskan ke Gmail.
- Notifikasi *Alert* modern (Sukses/Error) menggunakan **SweetAlert2**.

**🎞 Animasi & UX**
- Transisi halus dan *hover effect* premium di seluruh halaman.
- Digerakkan oleh **Framer Motion** dan **AOS (Animate On Scroll)**.

---

## 🧰 Teknologi yang Digunakan

Proyek ini dibangun menggunakan *stack* JavaScript modern:

* **React JS** - *Library* utama UI.
* **Tailwind CSS** - *Styling framework*.
* **Framer Motion** - Animasi *React-based* tingkat lanjut.
* **AOS (Animate On Scroll)** - Efek animasi berbasis *scroll*.
* **Axios** - *HTTP Client* untuk menangani formulir *contact*.
* **SweetAlert2** - *Pop-up alert* yang elegan.
* **React Icons & Lucide Icons** - Pustaka ikon *vector*.
* **Node.js & npm** - *Environment* & *package manager*.

---

## ✏️ Panduan Kustomisasi

Kamu dapat memodifikasi isi *website* dengan mengedit *file* berikut:

* **Halaman Utama (Home, About, Portfolio, Contact)** → `src/components/Home.jsx` *(Sesuaikan dengan struktur foldermu)*
* **Data Konten (Project, Sertifikat, dll)** → `src/data/data.js`
* **Email Penerima Form** → Konfigurasi FormSubmit / API di komponen *Contact*.
* **File CV** → Timpa *file* `CV_Taufiq_ikhsan_muzaky.pdf` di folder `public/`.

---

## 📦 Cara Install & Menjalankan Lokal

Pastikan **Node.js** sudah ter-install di komputermu. Cek versinya dengan perintah `node -v` dan `npm -v`.

### Opsi 1: Menggunakan Git Clone (Rekomendasi)
```bash
# 1. Clone repository
git clone [https://github.com/mzkyzak/web-react.git](https://github.com/mzkyzak/web-react.git)

# 2. Masuk ke direktori proyek
cd web-react

# 3. Install semua dependencies (Wajib)
npm install

# 4. Jalankan server lokal
npm start
