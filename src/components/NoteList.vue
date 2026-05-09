<template>
  <div class="list-section">
    <div class="list-header">
      <div>
        <h2>Semua Catatan</h2>
        <p>{{ notes.length }} catatan tersimpan</p>
      </div>
      <button class="refresh-btn" @click="$emit('refresh')" :disabled="loading">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" :class="{ spinning: loading }"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
        Refresh
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="state-container">
      <div class="skeleton" v-for="i in 3" :key="i">
        <div class="sk-badge"></div>
        <div class="sk-lines">
          <div class="sk-line w60"></div>
          <div class="sk-line w40"></div>
        </div>
      </div>
    </div>

    <!-- Empty -->
    <div v-else-if="notes.length === 0" class="empty-state">
      <div class="empty-icon">📭</div>
      <h3>Belum ada catatan</h3>
      <p>Yuk buat catatan pertamamu di atas!</p>
    </div>

    <!-- List -->
    <div v-else class="notes-grid">
      <NoteItem
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @edit="$emit('edit', $event)"
        @delete="$emit('delete', $event)"
      />
    </div>
  </div>
</template>

<script>
import NoteItem from './NoteItem.vue'
export default {
  name: 'NoteList',
  components: { NoteItem },
  props: {
    notes: { type: Array, default: () => [] },
    loading: { type: Boolean, default: false }
  },
  emits: ['refresh', 'edit', 'delete']
}
</script>