# Java Global — Company Website

Website resmi **Java Global** yang dibangun menggunakan **React + TypeScript (Vite)**.  
Proyek ini menampilkan profil perusahaan, layanan, portofolio proyek, tim, klien, dan katalog produk secara profesional dan interaktif.

------------------------------------------------------------
Tech Stack
------------------------------------------------------------
Frontend: React 18 + TypeScript  
Bundler: Vite  
Styling: Tailwind CSS (atau utilitas CSS sejenis)  
Routing: React Router DOM  
Image & Video Assets: dioptimasi melalui import.meta.glob  
Deployment-ready: mendukung hosting statis (Vercel, Netlify, Cloudflare, dll.)

------------------------------------------------------------
Struktur Proyek
------------------------------------------------------------
src/
 ├── assets/
 │    └── images/
 │         ├── product/
 │         └── projects/        # robot-1.jpg, robot-2.jpg, dst.
 ├── components/
 │    └── product/
 │         ├── Sidebar/
 │         │    ├── SearchBox.tsx
 │         │    ├── RecentPosts.tsx
 │         │    ├── Archives.tsx
 │         │    └── Categories.tsx
 │         ├── ProductDetailHero.tsx
 │         └── ProductNavPager.tsx
 ├── data/
 │    ├── products.ts           # daftar produk (title, slug, image)
 │    └── productDetails.ts     # detail produk (gambar, video, link berita)
 ├── pages/
 │    ├── Home.tsx
 │    ├── About.tsx
 │    ├── Product.tsx
 │    ├── ProductDetail.tsx
 │    ├── Download.tsx
 │    └── Contact.tsx
 ├── router/
 │    └── index.tsx             # routing utama + scroll-to-top
 ├── main.tsx
 └── index.css

------------------------------------------------------------
Fitur Utama
------------------------------------------------------------
Home Page
- Hero Section dengan headline perusahaan
- Mission & Vision
- Our Service (daftar layanan)
- Our Project (galeri proyek dengan gambar berurutan robot-1.jpg, robot-2.jpg, dst.)
- Team & Client
- Footer dengan kontak dan informasi dasar

About Page
- Menjelaskan pengalaman & keunggulan perusahaan (Our Experience)

Product Page
- Menampilkan daftar produk dari src/data/products.ts
- Klik salah satu produk untuk melihat detailnya

Product Detail Page
- Detail produk lengkap (deskripsi, gambar, video, tanggal, penulis)
- Media (gambar/video) dapat diperbesar
- Sidebar: Search, Recent Posts, Categories, Archives
- Navigasi antar produk (ProductNavPager)
- Tautan resmi ke artikel produk (misalnya dari haiwell.com)

Download Page
- Menyediakan file atau dokumen unduhan (komponen DownloadHero)

Contact Page
- Lokasi perusahaan menggunakan Google Maps Embed (tanpa API Key)

------------------------------------------------------------
Cara Menjalankan Proyek
------------------------------------------------------------
1. Clone Repository (SSH)
   git clone git@github.com:Nizaru-gpt/java-global.git

   Atau jika belum setup SSH:
   git clone https://github.com/Nizaru-gpt/java-global.git

   Masuk ke folder proyek:
   cd java-global

2. Install Dependencies
   Pastikan sudah terpasang Node.js versi 18+ dan npm
   npm install

3. Jalankan Server Development
   npm run dev

   Vite akan menjalankan server lokal:
   http://localhost:5173

4. Build untuk Produksi
   npm run build

   Hasil build akan muncul di folder dist/

5. Preview Build (opsional)
   npm run preview

------------------------------------------------------------
Deployment
------------------------------------------------------------
1. Jalankan perintah build untuk menghasilkan folder dist/
   npm run build

2. Upload folder dist/ ke platform hosting statis:
   - Vercel
   - Netlify
   - Cloudflare Pages
   - atau server pribadi (Nginx/Apache)

3. Pastikan server mengarahkan semua route ke index.html
   agar routing React (SPA) dapat berfungsi dengan benar.

------------------------------------------------------------
File Penting
------------------------------------------------------------
src/data/products.ts        - Daftar produk  
src/data/productDetails.ts  - Detail lengkap tiap produk  
src/assets/images/product/  - Gambar produk  
src/assets/images/projects/ - Galeri proyek  
src/pages/Contact.tsx       - Peta lokasi (Google Maps Embed)  
.gitignore                  - File dan folder yang diabaikan Git  
README.md                   - Dokumentasi proyek ini

------------------------------------------------------------
Lisensi
------------------------------------------------------------
Hak cipta © Java Global.  
Seluruh hak dilindungi undang-undang.  
Repository ini digunakan untuk keperluan internal perusahaan.

------------------------------------------------------------
Developer
------------------------------------------------------------
Author: Nizar
Repository: https://github.com/Nizaru-gpt/java-global.git  
Framework: React + TypeScript + Vite  
Versi: 1.0.0

"Clean code, clean company image."
