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
import IconGithub from "../assets/svg/github.svg"
import IconMedium from "../assets/svg/medium.svg"
import IconLinkedin from "../assets/svg/linkedin.svg"
import IconTwitter from "../assets/svg/twitter.svg"

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
      <div className="flex flex-wrap px-1 mt-32 sm:mt-40 md:mt-40 lg:mt-20 lg:px-12 xl:px-32">
        <main className="flex w-full">{children}</main>
        <footer className="flex w-full inline-block text-xs font-light justify-center items-center my-5">
          <div className="w-full flex flex-wrap text-center">
            <div className="w-full">
              <Code className="inline-block mr-1" /> with
              <Love className="heart inline-block ml-1 mr-1" />{" "}
              <a
                href="https://twitter.com/lemmusm"
                target="_blank"
                rel="noopener noreferrer"
              >
                by Manuel Hdez Lemus
              </a>
              ©{new Date().getFullYear()}, built with{" "}
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyLogo className="inline-block ml-1 mr-1" />
              </a>
            </div>
            <div className="w-full">
              <a
                href="https://www.linkedin.com/in/lemmusm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedin className="inline-block mr-2 linkContactFooter" />
              </a>
              <a
                href="https://github.com/lemmusm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGithub className="inline-block ml-2 mr-2 linkContactFooter" />
              </a>
              <a
                href="https://twitter.com/lemmusm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTwitter className="inline-block ml-2 mr-2 linkContactFooter" />
              </a>
              <a
                href="https://medium.com/@lemmusm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconMedium className="inline-block ml-2 mr-2 linkContactFooter" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
