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
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
      <p className="text-gray-400 mb-4">{post.date}</p>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <Link 
        href={`/blog/${post.slug}`}
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        Read more →
      </Link>
    </div>
  )
}

