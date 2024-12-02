'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const components = {
  h1: ({ ...props }) => <h1 className="text-3xl font-bold mb-4 text-white" {...props} />,
  h2: ({ ...props }) => <h2 className="text-2xl font-bold mb-4 text-white" {...props} />,
  h3: ({ ...props }) => <h3 className="text-xl font-bold mb-4 text-white" {...props} />,
  p: ({ ...props }) => <p className="mb-4 text-white/80" {...props} />,
  ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 text-white/80" {...props} />,
  ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4 text-white/80" {...props} />,
  li: ({ ...props }) => <li className="mb-2 text-white/80" {...props} />,
  table: ({ ...props }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full table-auto border-collapse" {...props} />
    </div>
  ),
  thead: ({ ...props }) => <thead className="bg-gray-100" {...props} />,
  th: ({ ...props }) => <th className="border px-4 py-2 text-left font-semibold" {...props} />,
  td: ({ ...props }) => <td className="border px-4 py-2" {...props} />,
  a: ({ ...props }) => <a className="text-blue-500 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer" {...props} />,
  img: ({ ...props }) => <img className="max-w-full h-auto my-4" alt="" {...props} />,
};

export default function WhitepaperPage() {
  const [content, setContent] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/wheat-eco/wheat-eco/main/README.md')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch whitepaper content')
        }
        return response.text()
      })
      .then(text => setContent(text))
      .catch(error => {
        console.error('Error fetching whitepaper:', error)
        setError('Failed to load whitepaper content. Please try again later.')
      })
  }, [])

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild className="mb-8">
          <Link href="/">Back to Home</Link>
        </Button>
        <div className="bg-black/50 backdrop-blur-sm shadow overflow-hidden sm:rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-white">Whitepaper</h1>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              components={components}
              className="prose prose-invert prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none"
            >
              {content}
            </ReactMarkdown>
          ) : (
            <p className="text-white/80">Loading whitepaper...</p>
          )}
        </div>
      </div>
    </div>
  )
}

