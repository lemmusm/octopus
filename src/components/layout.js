/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Code from "../assets/svg/code.svg"
import Love from "../assets/svg/heart.svg"
import GatsbyLogo from "../assets/svg/logogatsby.svg"

import Header from "./header"
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="flex flex-wrap px-5 mt-40 md:px-10 lg:px-32">
        <main className="flex w-full">{children}</main>
        <footer className="flex w-full inline-block font-light justify-center items-center my-5">
          <Code className="inline-block mr-2" /> with
          <Love className="inline-block ml-2 mr-2" /> by Manuel Hdez. Lemus ©
          {new Date().getFullYear()}, built with{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyLogo className="inline-block ml-2 mr-2" />
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
