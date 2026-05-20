export type PostStatus = 'PUBLISHED' | 'DRAFT' | string

export interface Post {
  id: string
  title: string
  status: PostStatus
  createdAt: string | null
  updatedAt: string | null
  publishedAt: string | null
  author: null
  slug: null
  category: 'Technology' | 'Development' | string | null
  viewCount: number
  featuredImage: string | null
  tags: string | null
  isDefault: boolean | null
  content: string
  excerpt: string
}

export interface ApiResponse {
  data: Post[]
  meta: {
    page: number
    limit: number
    total: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}
