'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const components = {
  h1: ({...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: ({...props}) => <h2 className="text-2xl font-bold mb-4" {...props} />,
  h3: ({...props}) => <h3 className="text-xl font-bold mb-4" {...props} />,
  p: ({...props}) => <p className="mb-4" {...props} />,
  ul: ({...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: ({...props}) => <ol className="list-decimal list-inside mb-4" {...props} />,
  li: ({...props}) => <li className="mb-2" {...props} />,
  table: ({...props}) => <table className="table-auto mb-4 w-full" {...props} />,
  th: ({...props}) => <th className="border px-4 py-2 bg-gray-100" {...props} />,
  td: ({...props}) => <td className="border px-4 py-2" {...props} />,
  a: ({...props}) => <a className="text-blue-500 hover:text-blue-700 underline" {...props} />,
};

export function Whitepaper() {
  const [content, setContent] = React.useState('')

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/wheat-eco/wheat-eco/main/README.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error fetching whitepaper:', error))
  }, [])

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Whitepaper</h2>
      {content ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </ReactMarkdown>
      ) : (
        <p>Loading whitepaper...</p>
      )}
    </section>
  )
}

