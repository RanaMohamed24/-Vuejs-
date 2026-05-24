<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('AboutView mounted')
})

onUnmounted(() => {
  console.log('AboutView unmounted')
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="card bg-white shadow-lg max-w-2xl mx-auto">
      <div class="card-body">
        <h1 class="card-title text-2xl">About ShoeStore</h1>
        <p class="text-gray-600 mt-2">
          ShoeStore is a demo product page built as part of the ITI VueJS course.
          This project demonstrates Vue 3 Composition API, Vue Router,
          component communication with props and emits, and lifecycle hooks.
        </p>
        <div class="mt-4">
          <p><strong>Student:</strong> Rana Mohamed</p>
          <p><strong>Course:</strong> VueJS — ITI</p>
        </div>
      </div>
    </div>
  </div>
</template>
