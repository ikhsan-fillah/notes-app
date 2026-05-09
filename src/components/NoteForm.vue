<template>
  <div class="form-card" :class="{ editing: isEditing }">
    <div class="form-header">
      <div class="form-icon">{{ isEditing ? '✏️' : '✨' }}</div>
      <div>
        <h2>{{ isEditing ? 'Edit Catatan' : 'Catatan Baru' }}</h2>
        <p>{{ isEditing ? 'Perbarui isi catatanmu' : 'Tulis apa yang ada di pikiranmu' }}</p>
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label>Judul</label>
        <input
          v-model="form.judul"
          type="text"
          placeholder="Judul catatan..."
          required
          :class="{ filled: form.judul }"
        />
      </div>
      <div class="field">
        <label>Isi Catatan</label>
        <textarea
          v-model="form.isi"
          placeholder="Tulis sesuatu yang ingin kamu ingat..."
          required
          :class="{ filled: form.isi }"
        ></textarea>
        <span class="char-count">{{ form.isi.length }} karakter</span>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-primary">
          <span>{{ isEditing ? 'Perbarui' : 'Simpan' }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <button v-if="isEditing" type="button" class="btn-ghost" @click="$emit('cancel')">
          Batal
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NoteForm',
  props: {
    isEditing: { type: Boolean, default: false },
    noteToEdit: { type: Object, default: null }
  },
  emits: ['submit', 'cancel'],
  data() {
    return {
      form: { judul: '', isi: '' }
    }
  },
  watch: {
    noteToEdit(val) {
      if (val) this.form = { judul: val.judul, isi: val.isi }
      else this.form = { judul: '', isi: '' }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.form })
      if (!this.isEditing) this.form = { judul: '', isi: '' }
    }
  }
}
</script>