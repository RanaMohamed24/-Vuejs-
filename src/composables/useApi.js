import { ref } from 'vue'

export function useApi(baseUrl) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  async function getAll() {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(baseUrl)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
    return data.value
  }

  async function getOne(id) {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`${baseUrl}/${id}`)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
    return data.value
  }

  async function update(id, body) {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
    return data.value
  }

  return { data, error, loading, getAll, getOne, update }
}
