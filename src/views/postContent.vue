<script setup lang="ts">
import { usePostsQuery } from '@/services/queries'
import { RouterLink } from 'vue-router' // Ensure RouterLink is imported

const { data: posts, isLoading } = usePostsQuery()
</script>

<template>
  <main class="min-h-screen px-4 py-6 md:p-6">
    <div v-if="isLoading" class="text-center py-10 font-medium text-slate-600">
      Loading posts...
    </div>

    <div v-else class="grid gap-6 max-w-4xl mx-auto">
      <article
        v-for="post in posts"
        :key="post.id"
        class="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
      >
        <h2 class="text-xl font-bold text-slate-900">{{ post.title }}</h2>
        <p class="text-slate-600 line-clamp-2 mt-2">
          {{ post.excerpt || 'No Excerpt Available' }}
        </p>

        <RouterLink
          :to="{ name: 'details', params: { id: post.id } }"
          class="text-blue-600 hover:underline mt-4 inline-block font-medium cursor-pointer"
        >
          Read More →
        </RouterLink>
      </article>
    </div>
  </main>
</template>
