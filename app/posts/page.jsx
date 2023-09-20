import Link from 'next/link';


async function getPostsData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    await new Promise((resolve) => setTimeout(resolve, 3000) )
    return res.json();
}

async function getUsersData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    await new Promise((resolve) => setTimeout(resolve, 3000) )
    return res.json();
}

const Posts = async () => {

    // const posts = await getPostsData();
    const [posts, users] = await Promise.all([getPostsData(), getUsersData()]);

  return (
    <div>
        <h1 className='text-4xl'>Posts page</h1>

        <h1 className='text-4xl'>Users</h1>

        {
            users.map((user, ind) => (
                <h4 key={ind}>{user.name}</h4>
            ))
        }

        <ul className='flex flex-col gap-4 mt-4'>
        {
            posts.map((post, ind) => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                    <li className='bg-gray-200 p-5'>
                        <h4 className='text-xl font-bold'>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                </Link>
            ))
        }
        </ul>
    </div>
  )
}

export default Posts