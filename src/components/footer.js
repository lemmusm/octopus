import React from "react"

import Code from "../assets/svg/code.svg"
import Love from "../assets/svg/heart.svg"
import GatsbyLogo from "../assets/svg/logogatsby.svg"
import IconGithub from "../assets/svg/github.svg"
import IconMedium from "../assets/svg/medium.svg"
import IconLinkedin from "../assets/svg/linkedin.svg"
import IconTwitter from "../assets/svg/twitter.svg"

const Footer = () => {
  return (
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
  )
}

export default Footer
