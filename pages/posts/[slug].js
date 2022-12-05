import { useRouter } from "next/router";
import { Footer, PostDetails } from "../../components";
import { getPosts, getPostDetails } from "../../services";

const PostDetail = ({ post }) => {
  console.log(post);
  return (
    <>
      <PostDetails post={post} />
      <Footer />
    </>
  );
};

export default PostDetail;

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
