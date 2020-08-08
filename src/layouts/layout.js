import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../theme/theme"
import { GlobalStyles } from "../theme/global"

import Rutas from "../routes/principal_menu"

import Header from "../components/header"
import Footer from "../components/footer"
import "../assets/css/global.css"

const Layout = ({ children }) => {
  !localStorage.getItem("theme") && localStorage.setItem("theme", "light")
  let getThemeLocalStorage = localStorage.getItem("theme")

  const [theme, setTheme] = useState(getThemeLocalStorage)
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      localStorage.setItem("theme", "light")
    }
  }

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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header
          Rutas={Rutas}
          toggleTheme={toggleTheme}
          siteTitle={data.site.siteMetadata.title}
        />
        <div className="flex flex-wrap px-1 mt-32 sm:mt-40 md:mt-40 lg:mt-20 lg:px-12 xl:px-32">
          <main className="flex w-full">{children}</main>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
