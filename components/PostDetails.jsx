import Image from "next/image";
import React from "react";
import SimilarPosts from "./SimilarPosts";

const PostDetails = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (
          <b key={index} className="text-white">
            {text}
          </b>
        );
      }

      if (obj.italic) {
        modifiedText = (
          <em key={index} className="text-white">
            {text}
          </em>
        );
      }

      if (obj.underline) {
        modifiedText = (
          <u key={index} className="text-white">
            {text}
          </u>
        );
      }
    }

    switch (type) {
      case "heading-two":
        return (
          <h2 key={index} className="text-3xl text-white font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-2xl text-white font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-white ">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-xl  text-white font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
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
            className="h-48 my-10 w-full md:h-[500px] md:my-16"
          />
        );

      case "code-block":
        return (
          // <PrismLight key={index} style={atomDark} language="javascript">
          //   modifiedText
          // </PrismLight>a
          <></>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="container px-5 lg:px-20 mx-auto mt-10 md:mt-32">
      <div className="flex flex-col space-y-5">
        <h1 className="text-5xl md:text-8xl xl:text-9xl font-semibold text-left  text-white ">
          {post.title}
        </h1>
        <div className="border-b-2 border-sky-200 py-2 md:py-2"></div>
        {/* <Image width={500} height={500} src={post?.featuredImage.url} /> */}
        <Image
          width={2500}
          height={1500}
          src={post.featuredImage.url}
          className="h-[400px] md:h-[600px] object-cover pt-5 md:pt-16"
          alt={`Post ${post.title} Image`}
          priority={true}
        />
        <div className="lg:w-2/3 pt-16 mx-auto ">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>

        <SimilarPosts
          slug={post.slug}
          categories={post.categories.map((category) => category.slug)}
        />
      </div>
    </div>
  );
};

export default PostDetails;
