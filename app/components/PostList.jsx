import Post from "./Post"


const PostList = ({ posts }) => {

  return (
    <ul className="flex flex-col gap-4">
      {
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
    </ul>
  )
}

export default PostList