import 'tailwindcss/tailwind.css'

import Link from 'next/link'
import Image from 'next/image'

// custom loader for cloudflare
const cloudflareImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


export default function Home({ posts }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 text-gray-500 m-6">
        {posts.map((post, index) => (
          <div className="border-t-2 bg-white h-18 pb-3">
            <Link href={'/blog/' + post.slug} passHref key={index}>
              <div className="row g-0">
                <div className="col-md-8">
                  <p className="mt-4">
                    <small className="text-muted">{post.frontMatter.date}</small>
                  </p>
                  <h1 className="text-3xl text-gray-700 mb-4 font-bold">{post.frontMatter.title}</h1>
                </div>
                <div className="col-md-4 float-left mr-5">
                  <Image
                    loader={cloudflareImageLoader}
                    src={post.frontMatter.thumbnailUrl}
                    className="img-fluid m-5 rounded-start float-left"
                    alt="thumbnail"
                    width={200}
                    height={150}
                    objectFit="cover"
                    />
                </div>
                <p>{post.frontMatter.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      posts
    }
  }
}