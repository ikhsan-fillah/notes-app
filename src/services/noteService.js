const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export const noteService = {
  async getAll() {
    const res = await fetch(`${API_URL}/api/v1/notes`)
    const json = await res.json()
    return json.data || []
  },

  async create(data) {
    const res = await fetch(`${API_URL}/api/v1/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return res.json()
  },

  async update(id, data) {
    const res = await fetch(`${API_URL}/api/v1/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return res.json()
  },

  async delete(id) {
    const res = await fetch(`${API_URL}/api/v1/notes/${id}`, {
      method: 'DELETE'
    })
    return res.json()
  }
}