<template>
  <div class="note-card">
    <div class="note-top">
      <div class="note-badge">{{ note.judul.charAt(0).toUpperCase() }}</div>
      <div class="note-meta">
        <h3>{{ note.judul }}</h3>
        <span class="note-date">{{ formatDate(note.tanggal_dibuat) }}</span>
      </div>
    </div>
    <p class="note-body">{{ note.isi }}</p>
    <div class="note-actions">
      <button class="action-btn edit" @click="$emit('edit', note)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        Edit
      </button>
      <button class="action-btn delete" @click="$emit('delete', note.id)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        Hapus
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteItem',
  props: { note: { type: Object, required: true } },
  emits: ['edit', 'delete'],
  methods: {
    formatDate(d) {
      return new Date(d).toLocaleString('id-ID', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
    }
  }
}
</script>