import type { ApiResponse, Post } from '@/types'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<ApiResponse>(`${baseUrl}/posts`, {
    params: {
      page: '1',
      limit: '10',
    },
  })
  return data.data
}

export const fetchPostsById = async (id: string): Promise<Post> => {
  const { data } = await axios.get<Post>(`${baseUrl}/posts/${id}`)
  return data
}
