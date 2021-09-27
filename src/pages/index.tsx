//import styles from '../styles/home.module.scss';
import Image from 'next/image'
import { GetServerSideProps } from "next";
import SEO from "../components/SEO";
import styles from '../styles/home.module.scss';
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
    <>
      <SEO title='Dev News!' excludeTitleSuffix />
      <main className={styles.content}>
        <section className={styles.section}>
          <span>Olá Dev!</span>
          <h1>
            Bem vindos & Bem vindas  <br />
            ao <span>Dev</span> News!
          </h1>
          <p>
            Um blog com conteúdos extremamentes <br />
            <span>relevantes para o seu aprendizado</span>
          </p>
        </section>

        <Image src='/home.svg' alt='Home Image' width='400' height='500'/>
      </main>
      {/*<h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ul>*/}
    </>
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
