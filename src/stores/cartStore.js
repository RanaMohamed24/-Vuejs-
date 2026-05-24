import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { useProductStore } from './productStore'

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage('cart', [])

  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.qty, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.qty, 0)
  )

  function addToCart(product) {
    const existing = items.value.find((item) => item.id === product.id)
    if (existing) {
      existing.qty++
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.discount > 0
          ? product.price - (product.price * product.discount) / 100
          : product.price,
        image: product.image,
        qty: 1,
      })
    }

    const productStore = useProductStore()
    productStore.decreaseStock(product.id)
  }

  function removeFromCart(id) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  function clearCart() {
    items.value = []
  }

  return { items, totalItems, totalPrice, addToCart, removeFromCart, clearCart }
})
