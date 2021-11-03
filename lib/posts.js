export function getTags() {
  const allTags = getSortedPostsData();
  let tags = [];
  allTags.forEach((post) => {
    tags = [...tags, ...post.tag];
  });
  const setTags = [...new Set(tags)];
  return setTags.sort();
}

export async function getAssociatedPosts(tag) {
  const allPosts = getSortedPostsData();
  const associatedPosts = allPosts.filter((data) => data.tag.includes(tag));
  return associatedPosts;
}