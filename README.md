<<<<<<< HEAD
# Portofolio Personal — Single Page

Website portofolio satu halaman untuk mahasiswa Informatika / Software Engineering.
Dibangun dengan **HTML5**, **Tailwind CSS (via CDN)**, dan **Vanilla JavaScript**.

## 📁 Struktur File

```
portfolio-source/
├── index.html   # Struktur & konten halaman (semua section)
├── style.css    # Custom CSS tambahan (animasi reveal, focus state, dsb.)
├── script.js    # Interaktivitas: hamburger menu, smooth scroll, reveal on scroll
└── README.md    # Dokumen ini
```

## 🚀 Cara Menjalankan

Karena tidak ada proses build (Tailwind dimuat via CDN), kamu cukup:

1. Download / clone folder ini.
2. Buka `index.html` langsung di browser, **atau**
3. Jalankan local server (disarankan, agar path relatif konsisten):
   ```bash
   # Python
   python3 -m http.server 8000

   # atau Node.js (perlu paket 'serve')
   npx serve .
   ```
4. Akses `http://localhost:8000`.

## 🎨 Kustomisasi Cepat

| Yang ingin diubah              | Lokasi                                                        |
|---------------------------------|----------------------------------------------------------------|
| Nama, headline, deskripsi hero  | Section `#home` di `index.html`                                |
| Foto profil                     | Ganti `src` pada `<img>` di section `#home`                    |
| Warna tema                      | `tailwind.config` di dalam `<head>` `index.html` (`colors`)    |
| Daftar skill                    | Section `#skills` di `index.html`                               |
| Proyek                          | Section `#projects` — duplikasi blok `<article>` untuk proyek baru |
| Email / LinkedIn / GitHub       | Section `#contact` — ganti `href` pada masing-masing tautan     |
| Link Resume/CV                  | Ganti `href="#"` pada tombol "Resume / CV" (navbar) dengan link file PDF |
| Warna & animasi custom          | `style.css`                                                     |
| Perilaku JS (scroll, menu, dll) | `script.js`                                                     |

## 🧩 Rencana Pengembangan Lanjutan

Beberapa ide jika ingin mengembangkan lebih jauh:

- **Ganti Tailwind CDN → Tailwind CLI/PostCSS** untuk build production yang lebih ringan (purge unused classes).
- **Migrasi ke React/Next.js** jika ingin komponen yang lebih modular (Navbar, Hero, ProjectCard, dsb. sebagai component terpisah).
- **Dark mode** — tambahkan toggle dan varian warna via `dark:` class Tailwind.
- **CMS ringan / data JSON** — pindahkan data proyek & skill ke file `data.json` lalu render dengan JS (`fetch` + `map`) agar konten mudah diupdate tanpa edit HTML.
- **Form kontak fungsional** — integrasikan dengan layanan seperti Formspree, EmailJS, atau backend sendiri.
- **Optimasi gambar** — ganti placeholder dengan gambar asli terkompresi (WebP) dan tambahkan `loading="lazy"`.
- **SEO & Open Graph** — tambahkan meta tag Open Graph/Twitter Card agar tampil rapi saat dibagikan ke media sosial.
- **Analytics** — integrasikan Google Analytics / Plausible untuk memantau pengunjung.

## ♿ Aksesibilitas

- Kontras warna teks sudah disesuaikan (Slate-900 di atas Slate-50/White).
- Navigasi mendukung keyboard (`focus-visible` outline).
- Menghormati preferensi `prefers-reduced-motion`.
- Atribut `aria-expanded` & `aria-controls` pada tombol hamburger.

## 📄 Lisensi

Bebas digunakan dan dimodifikasi untuk keperluan personal/portofolio.
=======
# myportofolio
>>>>>>> 3c15beff77ae934534ce7885428d12cecce9f286
