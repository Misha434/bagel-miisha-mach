import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getStaticPaths = async () => {
  const tags = await getAllTags()
  const paths = tags.map(({ tag }) => ({
    params: {
      tag
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const data = await getSortedPostsData();

  const allPostsData = data.filter((t) =>
    t.tags.includes(params.tags)
  );

  return {
    props: {
      allPostsData,
    },
  };
};

export function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDirectory);

  const allPostsData = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, filename);
    const fullContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fullContents);

    return {
      id,
      ...(matterResult.data),
    };
  });
};
