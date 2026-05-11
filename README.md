<div align="center">

# 🔧 Notes App — Backend

### REST API with Node.js + Express, deployed on Google App Engine

![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![App Engine](https://img.shields.io/badge/App_Engine-deployed-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)

**🔴 Live API:** https://kelas-if-b-kelompok-16.et.r.appspot.com

</div>

---

## 📂 Struktur Proyek

```
be/
├── config/
│   └── database.js       # Konfigurasi koneksi MySQL
├── controllers/
│   └── noteController.js  # Logic CRUD notes
├── models/
│   └── noteModel.js       # Query database
├── routes/
│   └── noteRoutes.js      # Definisi endpoint
├── schema/
│   └── Note.js            # Skema tabel notes
├── index.js              # Entry point server
├── app.yaml              # Konfigurasi App Engine
├── dockerfile            # Docker image
└── .env.example          # Contoh variabel environment
```

---

## 📌 API Endpoints

Base URL: `https://kelas-if-b-kelompok-16.et.r.appspot.com`

| Method | Endpoint | Deskripsi | Body |
|--------|----------|-----------|------|
| `GET` | `/notes` | Ambil semua catatan | — |
| `GET` | `/notes/:id` | Ambil catatan by ID | — |
| `POST` | `/notes` | Tambah catatan baru | `{ title, content }` |
| `PUT` | `/notes/:id` | Update catatan | `{ title, content }` |
| `DELETE` | `/notes/:id` | Hapus catatan | — |

### Contoh Response
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "Catatan Pertama",
      "content": "Ini isi catatan",
      "created_at": "2026-05-09T15:00:00.000Z"
    }
  ]
}
```

---

## ⚙️ Setup Lokal

### 1. Clone & Install
```bash
git clone -b be https://github.com/ikhsan-fillah/notes-app.git
cd notes-app
npm install
```

### 2. Konfigurasi Environment
```bash
cp .env.example .env
```
Edit file `.env`:
```env
DB_HOST=your_mysql_host
DB_PORT=3306
DB_USER=your_username
DB_PASS=your_password
DB_NAME=notes_123230219
PORT=3000
```

### 3. Jalankan Server
```bash
npm start
# Server berjalan di http://localhost:3000
```

---

## 🚀 Deployment — Google App Engine

```bash
gcloud app deploy app.yaml
```

### Konfigurasi `app.yaml`
```yaml
runtime: nodejs18
env: standard
instance_class: F1

env_variables:
  DB_HOST: "your_host"
  DB_NAME: "notes_123230219"
```

---

## 🗃️ Database Schema

```sql
CREATE TABLE notes (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  title       VARCHAR(255) NOT NULL,
  content     TEXT,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## 👤 Author

**Ikhsan Fillah Hidayat** — 123230219  
Universitas Pembangunan Nasional "Veteran" Yogyakarta

<div align="center">
<sub>← <a href="../../tree/main">Kembali ke Main</a> | <a href="../../tree/fe">Lihat Frontend →</a></sub>
</div>
