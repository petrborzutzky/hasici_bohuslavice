import React from "react";
import { getPostsAll, getPostDetails } from "../../services";
import { CalendarIcon } from "@heroicons/react/outline";
import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostDetails = ({ post }) => {
  return (
    <div>
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="w-full object-cover h-64 mb-5"
      />
      <h1 className="text-xl mb-5">{post.title} </h1>
      <div className="text-xs mb-5">
        <CalendarIcon className="w-4 inline-block mb-1 mr-2 text-red-800" />
        {moment(post.createdAt).format("DD. MM. YYYY")}
      </div>
      <p className="mb-5">{post.excerpt}</p>
      <RichText
        content={post.content.raw}
        renderers={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-semibold mb-5">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold mb-5">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mb-5">{children}</h3>
          ),
          p: ({ children }) => <p className="mb-5">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc ml-10 mb-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal ml-10 mb-5">{children}</ol>
          ),
          a: ({ children, href, title }) => (
            <a
              href={href}
              className="underline text-blue-400 hover:text-red-700"
            >
              {children}
            </a>
          ),
        }}
      />
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = (await getPostDetails(params.slug)) || [];

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPostsAll();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
