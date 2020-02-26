import React, { useState, useEffect } from "react"

const Post = ({ data }) => {
  return (
    <div className="w-full flex flex-wrap">
      {data.allMediumPost.edges.map(post => (
        <div
          className="w-full sm:w-1/2 py-5 rounded overflow-hidden shadow-lg"
          key={post.node.id}
        >
          <img
            class="w-full"
            src={`https://miro.medium.com/fit/c/520/156/${post.node.virtuals.previewImage.imageId}`}
            alt="Sunset in the mountains"
          ></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.node.title}</div>
            <p className="text-gray-700 text-base my-1">
              <strong>Preview: </strong>
              {post.node.virtuals.subtitle}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 my-1 text-sm font-semibold text-blue-500 mr-2 linkProjects">
              <a
                href={`https://medium.com/@lemmusm/${post.node.uniqueSlug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read post
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Post
