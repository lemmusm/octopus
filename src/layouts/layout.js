import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Rutas from "../routes/principal_menu"

import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"
import "../assets/css/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header Rutas={Rutas} siteTitle={data.site.siteMetadata.title} />
      <div className="flex flex-wrap px-1 mt-32 sm:mt-40 md:mt-40 lg:mt-20 lg:px-12 xl:px-32">
        <main className="flex w-full">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
