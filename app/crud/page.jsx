import AddPost from "../components/AddPost"
import PostList from "../components/PostList"

async function getPost() {
    const res = await fetch("http://localhost:3000/api/posts/", { cache: 'no-store' });
    return res.json();
}


const Crud = async () => {

    const posts = await getPost();
    console.log(posts);

  return (
    <div className="max-w-4xl mx-auto mt-4">
        <div className="my-4 flex flex-col gap-4">
            <h1 className="text-3xl text-center font-bold">Todo List App</h1>
            <AddPost/> 
        </div>
        
        <PostList posts = {posts}/>

    </div>
  )
}

export default Crud