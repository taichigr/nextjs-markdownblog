import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

export default function post({ post }) {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.body}
      />
      <h1>POST</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  if (!Object.keys(post).length) {
    return {
      notFound: true,
    };
  }
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => `/posts/${post.id}`);
  return {
    paths,
    fallback: false,
  };
};
