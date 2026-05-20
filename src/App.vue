<script setup lang="ts">
import ErrorBoundary from '@/components/errorBoundary.vue'
import { Suspense } from 'vue'
</script>

<template>
  <!-- 1. The Error Boundary catches JavaScript crashes -->
  <ErrorBoundary>
    <!-- 2. Suspense handles the "Wait Time" for Lazy-Loaded pages -->
    <Suspense>
      <template #default>
        <!-- The actual page content -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </template>

      <template #fallback>
        <!-- 3. Global Loading State (Pixel-perfect Skeleton) -->
        <div class="min-h-screen flex items-center justify-center bg-white">
          <div class="flex flex-col items-center gap-4">
            <div
              class="w-12 h-12 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"
            ></div>
            <p class="text-slate-500 font-medium animate-pulse">Loading Application...</p>
          </div>
        </div>
      </template>
    </Suspense>
  </ErrorBoundary>
</template>

<style scoped>
/* Smooth page transitions for a premium feel */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
