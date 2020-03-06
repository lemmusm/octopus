import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { globalHistory } from "@reach/router"
import styled from "styled-components"

const LogoText = styled.span`
  text-decoration: none;
  color: var(--textNormal);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#00c6ff),
    color-stop(50%, #00a0fe),
    to(#0172ff)
  );
  background: linear-gradient(90deg, #00c6ff 0, #00a0fe 50%, #0172ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Path = styled.span`
  text-decoration: none;
  color: var(--textNormal);
  background: -webkit-linear-gradient(to left, #f2709c, #ff9472);
  background: linear-gradient(to left, #f2709c, #ff9472);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const BtnDownload = styled.a`
  color: white;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#00c6ff),
    color-stop(50%, #00a0fe),
    to(#0172ff)
  );
  background: linear-gradient(90deg, #00c6ff 0, #00a0fe 50%, #0172ff);
`
const active = {
  color: "black",
}

const Header = () => {
  let path = globalHistory.location.pathname
  if (path === "/") {
    path = "/about me"
  }

  return (
    <header className="flex flex-wrap w-full px-1 lg:px-12 xl:px-32 bg-white p-2 pt-10 lg:pt-20 xl:pt-20 mt-0 fixed z-10 top-0">
      <div className="flex w-full mb-5 lg:mb-0 xl:mb-0 lg:w-1/2 xl:w-1/2 px-5 font-bold">
        <Link className="flex items-center flex-shrink-0 mr-2" to="/">
          <LogoText className="font-bold ml-3 text-4xl hidden sm:inline-block md:inline-block lg:inline-block xl:inline-block"></LogoText>
          <Path className="text-4xl font-bold">{path}</Path>
        </Link>
      </div>
      <div className="flex w-full  lg:mb-0 xl:mb-0 lg:w-1/2 xl:w-1/2">
        <nav className="flex flex-wrap w-full p-6 ">
          <ul className="flex w-full justify-between inline-flex">
            <li className="mr-2">
              <Link
                to={"/"}
                className="text-gray-600 hover:text-black"
                activeStyle={active}
              >
                About me
              </Link>
            </li>

            <li className="mr-2">
              <Link
                to="/blog"
                className="text-gray-600 hover:text-black"
                activeStyle={active}
              >
                Blog
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/contact"
                className="text-gray-600 hover:text-black"
                activeStyle={active}
              >
                Contact
              </Link>
            </li>
            <li className="mr-2">
              <BtnDownload
                href="https://drive.google.com/file/d/1GN1GIXSJTssVPQUfH7WcdgvDotZtB92K/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 leading-none rounded  hover:text-black mt-4 lg:mt-0"
              >
                Download CV
              </BtnDownload>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
