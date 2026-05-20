<script setup lang="ts">
import { usePostQuery } from '@/services/queries'
import { Calendar, User, Eye, ArrowLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const props = defineProps<{
  id: string
}>()

const router = useRouter()
const { data: post, isLoading, isError } = usePostQuery(props.id)

const formatDate = (dateString: string | null) => {
  if (!dateString) return 'Date unknown'
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
const goBack = () => {
  // Check if there is a window history to go back to
  if (window.history.length > 1) {
    router.back()
  } else {
    // Fallback to home page if no history exists
    router.push('/')
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8 md:py-12">
    <!-- Back Button -->
    <button
      @click="goBack"
      class="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 group cursor-pointer"
    >
      <ArrowLeft :size="18" class="group-hover:-translate-x-1 transition-transform" />
      <span>Back to Home Page</span>
    </button>

    <div v-if="isLoading" class="animate-pulse space-y-4">
      <div class="h-64 bg-slate-200 rounded-xl w-full"></div>
      <div class="h-10 bg-slate-200 rounded w-3/4"></div>
      <div class="h-4 bg-slate-200 rounded w-1/2"></div>
    </div>

    <article v-else-if="post" class="space-y-8">
      <!-- Featured Image -->
      <header class="space-y-6">
        <!-- <img
          v-if="post.featuredImage"
          :src="post.featuredImage"
          :alt="post.title"
          class="w-full h-[300px] md:h-[450px] object-cover rounded-2xl shadow-lg"
        /> -->

        <div class="space-y-4">
          <!-- Category Badge -->
          <div class="flex items-center gap-2">
            <span
              class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              {{ post.category || 'General' }}
            </span>
          </div>

          <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {{ post.title }}
          </h1>

          <!-- Meta Information -->
          <div
            class="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-500 border-b border-slate-100 pb-6"
          >
            <div class="flex items-center gap-1.5">
              <User :size="16" />
              <span>{{ post.author || 'Anonymous' }}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Calendar :size="16" />
              <span>{{ formatDate(post.publishedAt) }}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Eye :size="16" />
              <span>{{ post.viewCount }} views</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <section
        class="prose prose-slate lg:prose-lg max-w-none prose-img:rounded-xl"
        v-html="post.content"
      ></section>
    </article>

    <div v-else-if="isError" class="text-center py-20">
      <p class="text-red-500 font-medium">Failed to load post. Please try again later.</p>
    </div>
  </div>
</template>
