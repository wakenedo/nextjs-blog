import { GetStaticProps } from "next"

//Ocorre no processo de build a montagem dos HTMLs

interface Post {
  id: string;
  title: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts } : PostsProps) {
    return (
      <div>
        <h1>Listagem de Posts</h1>
        <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ul>
      </div>
    )
  }
  
  export const getStaticProps: GetStaticProps<PostsProps> = async () => {
    const response = await fetch('http://localhost:3333/posts');
    const posts = await response.json();
    return {
      //will be passed to the page component as props
      props: {
        posts,
      },
      revalidate: 5 //in seconds
    }
  }