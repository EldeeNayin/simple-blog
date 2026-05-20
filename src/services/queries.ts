import type { Post } from '@/types'
import { useQuery } from '@tanstack/vue-query'
import { fetchPosts, fetchPostsById } from './api'

export const usePostsQuery = () => {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
}

export const usePostQuery = (id: string) => {
  return useQuery<Post>({
    queryKey: ['posts', id],
    queryFn: () => fetchPostsById(id),
    enabled: !!id, // Only run if an ID is provided
  })
}
