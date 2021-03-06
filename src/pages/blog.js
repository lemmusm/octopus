import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import Post from "../components/post"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFeedMediumBlog {
        edges {
          node {
            id
            title
            link
            categories
            contentSnippet
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Blog" />
      <div className="lg:mt-20 pt-20 xl:0 p-5 flex flex-wrap">
        <h1 className="text-4xl sm:text-5xl gradientTitle">Posts</h1>
        <Post data={data} />

        <div className="flex w-full justify-center ">
          <a
            href="https://medium.com/@lemmusm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent font-semibold py-2 px-4 border linkProjects rounded"
          >
            Load more posts...
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
