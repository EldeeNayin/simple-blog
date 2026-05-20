<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const error = ref<Error | null>(null)

// Catch errors from any child component
onErrorCaptured((err) => {
  error.value = err
  return false // Prevent error from propagating further
})

const reset = () => {
  error.value = null
  window.location.reload() // Or navigate home
}
</script>

<template>
  <div v-if="error" class="min-h-screen flex items-center justify-center p-6 bg-slate-50">
    <div
      class="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100"
    >
      <h2 class="text-2xl font-bold text-slate-900 mb-2">Something went wrong</h2>
      <p class="text-slate-600 mb-6 text-sm">{{ error.message }}</p>
      <button
        @click="reset"
        class="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
      >
        Try Again
      </button>
    </div>
  </div>
  <slot v-else />
</template>
