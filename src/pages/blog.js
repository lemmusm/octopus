import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            title
            uniqueSlug
            id
            title
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="lg:mt-20 pt-20 xl:0 p-5 flex flex-wrap">
        <h1 className="flex w-full text-right text-4xl sm:text-5xl gradientText">
          POSTS
        </h1>

        <Post data={data} />
      </div>
    </Layout>
  )
}

export default SecondPage
