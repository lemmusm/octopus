import React from "react"

const Post = ({ data }) => {
  // Filter null content in contentSnippet
  const filterData = data.allFeedMediumBlog.edges.filter(
    item => item.node.contentSnippet !== null
  )
  return (
    <div className="w-full flex flex-wrap">
      {filterData.map(post => (
        <div className="w-full sm:w-1/2 py-5 " key={post.node.id}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.node.title}</div>
            <p className="colorText text-base my-1">
              {post.node.contentSnippet.replace(
                "Continue reading on Medium »",
                " »"
              )}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-transparent px-3 py-1 my-1 text-sm font-semibold mr-2 linkProjects colorText rounded">
              <a
                href={post.node.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue reading...
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Post
