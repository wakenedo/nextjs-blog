import { GetStaticPaths, GetStaticProps } from 'next';
import  {useRouter} from 'next/router';

interface Comment {
  id: string;
  body: string;
}

interface CommentsProps {
  comments: Comment[];  
}


export default function Post({ comments } : CommentsProps) {
    const router = useRouter();

    if(router.isFallback) {
      return <p>Loading...</p>
    }
    
    return (
        <>
      <h1>Post {router.query.id}</h1>
      <ul>
        {comments.map( comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
        </ul>
        </>
    )
  }

  //ISG Incrmental Static Genaration
  export const getStaticPaths: GetStaticPaths = async () => {
    // const response = await fetch('http://localhost:3333/posts');
    // const posts = await response.json();
    //
    // const paths = posts.map(post => {
    //  return {
    //    params: { postid: String(post.id) },
    //  };
    //});
  
    //This way we gain performance, without interfering with the dynamic features  
    return {
      paths: [],
      fallback: true,
    };
  };

  export const getStaticProps: GetStaticProps<CommentsProps> = async context => {
    const { postid } = context.params;
    const response = await fetch(`http://localhost:3333/comments?postId=${postid}`);
    const comments = await response.json();
  
    return {
      props: {
        comments,
      },
      revalidate: 5, // In seconds
    };
  };
  