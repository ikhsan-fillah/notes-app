<div align="center">

# 📝 Notes App

### Full-Stack Notes Application — Praktikum Teknologi Cloud Computing

![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-Cloud-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![GCP](https://img.shields.io/badge/Google_Cloud-deployed-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)

</div>

---

## 🗂️ Struktur Branch

| Branch | Deskripsi | Platform Deploy |
|--------|-----------|----------------|
| [`be`](../../tree/be) | Backend REST API (Node.js + Express) | Google App Engine |
| [`fe`](../../tree/fe) | Frontend (Vue 3 + Vite) | Google Cloud Run |

---

## 🌐 Live Demo

| Service | URL |
|---------|-----|
| 🔵 **Backend API** | https://kelas-if-b-kelompok-16.et.r.appspot.com |
| 🟢 **Frontend App** | https://notes-frontend-311142907128.asia-southeast1.run.app |

---

## 📌 Endpoint API

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/notes` | Ambil semua catatan |
| `GET` | `/notes/:id` | Ambil catatan by ID |
| `POST` | `/notes` | Tambah catatan baru |
| `PUT` | `/notes/:id` | Update catatan |
| `DELETE` | `/notes/:id` | Hapus catatan |

---

## 🏗️ Arsitektur

```
┌─────────────────────────────────────────────────────┐
│                   Google Cloud Platform              │
│                                                     │
│  ┌──────────────────┐     ┌─────────────────────┐  │
│  │   Cloud Run      │────▶│    App Engine        │  │
│  │  (Frontend/FE)   │     │   (Backend/BE)       │  │
│  │  Vue 3 + Vite    │     │  Node.js + Express   │  │
│  └──────────────────┘     └──────────┬──────────┘  │
│                                      │              │
│                            ┌─────────▼──────────┐  │
│                            │   Cloud SQL / DB    │  │
│                            │  MySQL (aiven.io)   │  │
│                            └────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

---

## 👤 Author

**Ikhsan Fillah Hidayat** — 123230219  
Program Studi Informatika  
Universitas Pembangunan Nasional "Veteran" Yogyakarta  

---

<div align="center">
<sub>Tugas 2 — Praktikum Teknologi Cloud Computing 2026</sub>
</div>
