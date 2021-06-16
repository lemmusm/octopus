import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Error404 from "../assets/svg/error404.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="lg:mt-5 pt-5 xl:0 p-5 flex flex-wrap">
      <div className="flex w-full p-3 text-center items-center font-bold">
        <div className="font-light text-5xl md:text-6xl ">
          <div className="justify-center flex w-full">
            <Error404 className="pulso" />
          </div>
          Oops! The page you're looking for is now beyond our reach.{" "}
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
