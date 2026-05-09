<template>
  <div class="app">
    <!-- Sidebar / Header -->
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <span>NoteApp</span>
      </div>
      <nav>
        <div class="nav-item active">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Semua Catatan
        </div>
      </nav>
      <div class="sidebar-footer">
        <div class="user-info">
          <div class="avatar">IF</div>
          <div>
            <div class="user-name">Ikhsan Fillah</div>
            <div class="user-nim">123230219</div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main">
      <!-- Top Bar -->
      <div class="topbar">
        <div>
          <h1>{{ isEditing ? 'Edit Catatan' : 'Catatan Saya' }}</h1>
          <p>Kelola semua catatanmu dengan mudah</p>
        </div>
        <div class="status-dot" :class="backendOnline ? 'online' : 'offline'">
          {{ backendOnline ? '🟢 Backend Online' : '🔴 Backend Offline' }}
        </div>
      </div>

      <!-- Alert Toast -->
      <transition name="toast">
        <div v-if="alert.show" :class="['toast', alert.type]">
          {{ alert.message }}
        </div>
      </transition>

      <div class="content-grid">
        <!-- Form -->
        <NoteForm
          :isEditing="isEditing"
          :noteToEdit="selectedNote"
          @submit="handleSubmit"
          @cancel="cancelEdit"
        />

        <!-- List -->
        <NoteList
          :notes="notes"
          :loading="loading"
          @refresh="fetchNotes"
          @edit="editNote"
          @delete="deleteNote"
        />
      </div>
    </main>
  </div>
</template>

<script>
import NoteForm from './components/NoteForm.vue'
import NoteList from './components/NoteList.vue'
import { noteService } from './services/noteService.js'

export default {
  name: 'App',
  components: { NoteForm, NoteList },
  data() {
    return {
      notes: [],
      loading: false,
      isEditing: false,
      selectedNote: null,
      backendOnline: false,
      alert: { show: false, message: '', type: '' }
    }
  },
  mounted() {
    this.fetchNotes()
  },
  methods: {
    showAlert(message, type = 'success') {
      this.alert = { show: true, message, type }
      setTimeout(() => { this.alert.show = false }, 3000)
    },
    async fetchNotes() {
      this.loading = true
      try {
        this.notes = await noteService.getAll()
        this.backendOnline = true
      } catch {
        this.backendOnline = false
        this.showAlert('Gagal terhubung ke backend!', 'error')
      } finally {
        this.loading = false
      }
    },
    async handleSubmit(form) {
      try {
        if (this.isEditing) {
          await noteService.update(this.selectedNote.id, form)
          this.showAlert('✅ Catatan berhasil diperbarui!')
          this.cancelEdit()
        } else {
          await noteService.create(form)
          this.showAlert('✅ Catatan berhasil ditambahkan!')
        }
        this.fetchNotes()
      } catch {
        this.showAlert('❌ Gagal menyimpan catatan!', 'error')
      }
    },
    editNote(note) {
      this.isEditing = true
      this.selectedNote = note
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    cancelEdit() {
      this.isEditing = false
      this.selectedNote = null
    },
    async deleteNote(id) {
      if (!confirm('Hapus catatan ini?')) return
      try {
        await noteService.delete(id)
        this.showAlert('🗑️ Catatan dihapus!')
        this.fetchNotes()
      } catch {
        this.showAlert('❌ Gagal menghapus!', 'error')
      }
    }
  }
}
</script>