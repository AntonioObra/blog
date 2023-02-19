import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostDetails from "../../components/PostDetails";
import { getPosts, getPostDetails } from "../../services";

export default function PostView({ post }) {
  if (!post) return <>Loading...</>;

  return (
    <section className="dark:bg-[#0a0a0a]">
      <PostDetails post={post} />
      <Footer />
    </section>
  );
}

// Fetch data at build time
export const getStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
};
