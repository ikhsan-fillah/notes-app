<div align="center">

# 🎨 Notes App — Frontend

### Web App with React + Vite, deployed on Google Cloud Run

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Cloud Run](https://img.shields.io/badge/Cloud_Run-deployed-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-nginx-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**🟢 Live App:** https://notes-frontend-311142907128.asia-southeast1.run.app

</div>

---

## 📂 Struktur Proyek

```
fe/
├── src/
│   ├── components/       # Komponen React
│   ├── pages/            # Halaman aplikasi
│   ├── services/         # API calls ke backend
│   └── App.jsx           # Root component
├── public/               # Static assets
├── Dockerfile            # Multi-stage build (nginx)
├── .env.production       # URL backend production
└── vite.config.js        # Konfigurasi Vite
```

---

## ✨ Fitur

- 📝 **Create** — Tambah catatan baru
- 📖 **Read** — Lihat semua catatan
- ✏️ **Update** — Edit catatan yang ada
- 🗑️ **Delete** — Hapus catatan
- 🔄 **Real-time** — Data langsung dari REST API

---

## ⚙️ Setup Lokal

### 1. Clone & Install
```bash
git clone -b fe https://github.com/ikhsan-fillah/notes-app.git
cd notes-app
npm install
```

### 2. Konfigurasi Environment
```bash
# Buat file .env
echo "VITE_API_URL=https://kelas-if-b-kelompok-16.et.r.appspot.com" > .env
```

### 3. Jalankan Dev Server
```bash
npm run dev
# App berjalan di http://localhost:5173
```

### 4. Build Production
```bash
npm run build
```

---

## 🚀 Deployment — Google Cloud Run

```bash
gcloud run deploy notes-frontend \
  --source . \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --port 80
```

### Dockerfile (Multi-stage)
```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🌐 Koneksi ke Backend

Frontend berkomunikasi dengan backend melalui REST API:

```
Frontend (Cloud Run)
  ↓  HTTPS Request
Backend (App Engine)
  ↓  SQL Query  
MySQL Database (Aiven)
```

---

## 👤 Author

**Ikhsan Fillah Hidayat** — 123230219  
Universitas Pembangunan Nasional "Veteran" Yogyakarta

<div align="center">
<sub><a href="../../tree/be">← Lihat Backend</a> | <a href="../../tree/main">Kembali ke Main →</a></sub>
</div>
