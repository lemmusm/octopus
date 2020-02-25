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
          <svg
            height="42pt"
            viewBox="0 0 511 512"
            width="42pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              id="linear0"
              gradientUnits="userSpaceOnUse"
              x1=".5003003105"
              x2="512.3158194345"
              y1="256.0000258725"
              y2="256.0000258725"
            >
              <stop offset="0" stopColor="#00f2fe" />
              <stop offset=".0208" stopColor="#03effe" />
              <stop offset=".2931" stopColor="#24d2fe" />
              <stop offset=".5538" stopColor="#3cbdfe" />
              <stop offset=".7956" stopColor="#4ab0fe" />
              <stop offset="1" stopColor="#4facfe" />
            </linearGradient>
            <path
              d="m208.425781 190.929688c11.039063 0 19.992188 8.953124 19.992188 19.992187 0 11.042969-8.953125 19.992187-19.992188 19.992187-11.042969 0-19.996093-8.949218-19.996093-19.992187 0-11.039063 8.953124-19.992187 19.996093-19.992187zm89.964844 39.984374c11.042969 0 19.992187-8.949218 19.992187-19.992187 0-11.039063-8.949218-19.992187-19.992187-19.992187s-19.992187 8.953124-19.992187 19.992187c0 11.042969 8.953124 19.992187 19.992187 19.992187zm213.925781 96.964844-.003906-15.808594c0-24.753906-22.679688-46.464843-48.535156-46.464843-23.386719 0-48.429688 18.597656-48.429688 46.28125 0 11.039062 8.953125 19.992187 19.996094 19.992187 11.039062 0 19.992188-8.953125 19.992188-19.992187 0-3.917969 5.863281-6.296875 8.441406-6.296875 3.964844 0 8.550781 3.921875 8.550781 6.484375v.25.003906c0 20.117187-16.367187 36.484375-36.484375 36.484375-20.121094 0-36.488281-16.367188-36.488281-36.484375v-.5c0-12.757813 4.148437-31.554687 8.539062-51.453125 6.304688-28.570312 13.453125-60.953125 13.453125-94.121094 0-.277344-.03125-.542968-.042968-.816406.011718-.269531.042968-.539062.042968-.8125 0-90.773438-73.851562-164.625-164.625-164.625-91.121094 0-165.257812 74.582031-165.257812 166.253906 0 33.167969 7.148437 65.550782 13.453125 94.121094 4.394531 19.902344 8.539062 38.695312 8.539062 51.453125v.5c0 20.117187-16.367187 36.488281-36.484375 36.488281-20.121094 0-36.488281-16.371094-36.488281-36.488281 0-.042969-.003906-.085937-.003906-.128906s.003906-.082031.003906-.125c0-2.558594 4.585937-6.480469 8.554687-6.480469 2.523438 0 8.441407 1.800781 8.441407 5.292969 0 11.042969 8.949219 19.992187 19.992187 19.992187 11.042969 0 19.992188-8.949218 19.992188-19.992187 0-27.96875-25.136719-45.28125-48.425782-45.28125-25.859374 0-48.539062 21.714843-48.539062 46.46875 0 .042969.007812.082031.007812.125s-.007812.085937-.007812.128906c0 1.789063.082031 3.554687.203125 5.3125-.121094.890625-.203125 1.789063-.203125 2.714844 0 29.101562 12.980469 56.847656 36.546875 78.121093 22.082031 19.933594 50.855469 31.367188 78.941406 31.367188 25.773438 0 57.890625-11.675781 81.53125-33.792969 21.722657 79.28125 89.789063 115.949219 153.816407 115.949219 10.679687 0 21.535156-1.183594 32.269531-3.515625 10.792969-2.34375 17.636719-12.992187 15.296875-23.78125-2.347656-10.789063-12.996094-17.636719-23.78125-15.292969-7.953125 1.726563-15.953125 2.601563-23.785156 2.601563-44.910157 0-120.917969-27.734375-120.917969-131.695313v-18.433594c0-11.042968-8.953125-19.992187-19.992188-19.992187-11.042969 0-19.996093 8.949219-19.996093 19.992187 0 24.128907-13.738282 40.152344-25.269532 49.34375-14.1875 11.320313-33.492187 18.632813-49.171875 18.632813-6.792969 0-13.800781-1.15625-20.683593-3.296875 33.339843-8.234375 58.140624-38.386719 58.140624-74.234375v-.5c0-17.117187-4.394531-37.023437-9.480468-60.070313-5.863282-26.574218-12.511719-56.695312-12.511719-85.503906 0-69.625 56.195313-126.269531 125.269531-126.269531 68.726563 0 124.636719 55.914063 124.636719 124.640625 0 .273438.03125.542969.042969.816406-.011719.269532-.042969.539063-.042969.8125 0 28.808594-6.644531 58.929688-12.511719 85.503906-5.085937 23.046876-9.480468 42.953126-9.480468 60.070313v.5c0 42.167969 34.308593 76.472656 76.472656 76.472656 2.289062 0 4.550781-.121093 6.789062-.320312-13.851562 12.429687-32.195312 20.371093-54.269531 20.371093-42.378906 0-71.976563-35.699218-71.976563-86.816406 0-11.042968-8.949218-19.992187-19.992187-19.992187-11.039063 0-19.992187 8.949219-19.992187 19.992187 0 34.65625 10.84375 66.429688 30.535156 89.472656 20.570312 24.070313 49.488281 37.328126 81.425781 37.328126 35.46875 0 67.765625-14.421876 90.941406-40.609376 18.3125-20.6875 29.804688-47.71875 32.433594-75.632812.367187-1.515625.582031-3.089844.582031-4.714844zm0 0"
              fill="url(#linear0)"
            />
          </svg>
          <LogoText className="font-bold ml-3 text-4xl hidden sm:inline-block md:inline-block lg:inline-block xl:inline-block">
            OCTOPUS
          </LogoText>
          <Path className="text-4xl font-normal">{path}</Path>
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
                href="#"
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
