<script setup lang="ts">
import { usePostsQuery } from '@/services/queries'

const { data: posts, isLoading } = usePostsQuery()
</script>

<template>
  <main class="min-h-screen px-4 py-6 md:p-6">
    <div v-if="isLoading">Loading posts...</div>

    <div v-else class="grid gap-6">
      <!-- Loop through the posts array -->
      <article
        v-for="post in posts"
        :key="post.id"
        class="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <h2 class="text-xl font-bold">{{ post.title }}</h2>
        <p class="text-slate-600 line-clamp-2 mt-2">{{ post.excerpt || 'No Excerpt Available' }}</p>

        <!-- The dynamic link using the ID or Slug -->
        <RouterLink
          :to="{ name: 'details', params: { id: post.id } }"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline mt-4 inline-block font-medium"
        >
          Read More →
        </RouterLink>
      </article>
    </div>
  </main>
</template>
