import React from "react";
import PostHeader from "./PostHeader";
import styles from "./PostDetails.module.scss";
import SimilarPosts from "./SimilarPosts";
import AboutHome from "../HomePage/AboutHome";
import { PrismLight } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

const PostDetails = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    console.log(obj);

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-two":
        return (
          <h2 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );

      case "iframe":
        return (
          <iframe
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.url}
          />
        );

      case "code-block":
        return (
          <PrismLight key={index} style={atomDark} language="javascript">
            modifiedText
          </PrismLight>
        );
      default:
        return modifiedText;
    }
  };

  if (!post) {
    return <>resi</>;
  }
  return (
    <div>
      <PostHeader
        title={post.title}
        excerpt={post.excerpt}
        img={post.featuredImage.url}
      />

      <div className={styles.Post}>
        <div className={styles.PostPost}>
          {" "}
          <div className={styles.PostText}>
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                getContentFragment(itemindex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>
      </div>
      <AboutHome />
      <SimilarPosts
        slug={post.slug}
        categories={post.categories.map((category) => category.slug)}
      />
    </div>
  );
};

export default PostDetails;
