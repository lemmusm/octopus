import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const SecondPage = () => {
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
      <SEO title="Blog" />
      <div className="lg:mt-20 pt-20 xl:0 p-5 flex flex-wrap">
        <h1 className="flex w-full text-right text-4xl sm:text-5xl gradientText">
          Posts
        </h1>
        <Post data={data} />

        <div className="flex w-full justify-center ">
          <a
            href="https://medium.com/@lemmusm"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-transparent font-semibold py-2 px-4 border linkProjects rounded"
          >
            Load more posts...
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
