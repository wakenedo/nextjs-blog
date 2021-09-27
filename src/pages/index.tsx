//import styles from '../styles/home.module.scss';

import { GetServerSideProps } from "next";
//import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
}

interface HomeProps {
  posts: Post[];
}

//CSR - Client Side Rendering - Padrão React
//export default function Home() {
//  const [posts, setPosts] = useState<Post[]>([]);

//  useEffect(() => {
//    fetch('http://localhost:3333/posts').then((response) => {
//      response.json().then((data) => {
//        setPosts(data);
//      });
//    });
//}, []);


//SSR - Server Side Rendering - Usando o node que existe no Nextjs
export default function Home({ posts } : HomeProps) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  }
}
