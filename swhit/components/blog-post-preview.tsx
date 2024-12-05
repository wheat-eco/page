import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
}

interface BlogPostPreviewProps {
  post: BlogPost
}

export function BlogPostPreview({ post }: BlogPostPreviewProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="block group"
    >
      <article className="space-y-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
        <div className="space-y-2">
          <time className="text-sm text-gray-400">{post.date}</time>
          <h2 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </div>
        <p className="text-gray-400 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
          <span>Read more</span>
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </article>
    </Link>
  )
}

