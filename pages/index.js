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
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post, index) => (
          <div className="shadow-sm bg-white rounded-lg h-18">
            <Link href={'/blog/' + post.slug} passHref key={index}>
              <div className="row g-0">
                <div className="col-md-8">
                  <h1 className="text-3xl">{post.frontMatter.title}</h1>
                  <p>{post.frontMatter.description}</p>
                  <p>
                    <small className="text-muted">{post.frontMatter.date}</small>
                  </p>
                </div>
                <div className="col-md-4 m-auto">
                  <Image
                    loader={cloudflareImageLoader}
                    src={post.frontMatter.thumbnailUrl}
                    className="img-fluid mt-1 rounded-start"
                    alt="thumbnail"
                    width={500}
                    height={400}
                    objectFit="cover"
                  />
                </div>
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