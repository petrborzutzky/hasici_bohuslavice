import React from "react"
import { getPosts, getPostDetails } from "../../services"
import { CalendarIcon } from "@heroicons/react/outline"
import moment from "moment"



const PostDetails = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case "heading-three":
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case "paragraph":
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case "heading-four":
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
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
      default:
        return modifiedText;
  }
}
  
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
      

      {post.content.raw.children.map( (typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
    </div>
  )
}

export default PostDetails

export async function getStaticProps( { params } ) {
  const data = (await getPostDetails(params.slug)) || []

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: false,
  }
}

