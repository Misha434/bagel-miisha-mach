import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'

import Button from '../../components/Button'

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <div className="m-6 text-gray-600">
      <p className="text-md text-gray-400">{date}</p>
      <h1 className="text-4xl text-gray-800 font-bold">{title}</h1>
      <div className="leading-loose pb-5">
        <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
      </div>
    </div>
  )
}

export default PostPage
