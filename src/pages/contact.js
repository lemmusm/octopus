import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IconGithub from "../assets/svg/github.svg"
import IconMedium from "../assets/svg/medium.svg"
import IconLinkedin from "../assets/svg/linkedin.svg"
import IconTwitter from "../assets/svg/twitter.svg"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="lg:mt-20 pt-20 xl:0 p-5 w-full flex flex-wrap">
      <div className="w-1/4 py-5">
        <div className="w-full flex px-6 py-4 justify-center">
          <a
            href="https://github.com/lemmusm"
            className="linkContact"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconGithub />
          </a>
        </div>
      </div>
      <div className="w-1/4 py-5">
        <div className="w-full flex px-6 py-4 justify-center">
          <a
            href="https://www.linkedin.com/in/lemmusm/"
            className="linkContact"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconLinkedin />
          </a>
        </div>
      </div>
      <div className="w-1/4 py-5">
        <div className="w-full flex px-6 py-4 justify-center">
          <a
            href="https://twitter.com/lemmusm"
            className="linkContact"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconTwitter />
          </a>
        </div>
      </div>
      <div className="w-1/4 py-5">
        <div className="w-full flex px-6 py-4 justify-center">
          <a
            href="https://medium.com/@lemmusm"
            className="linkContact"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconMedium />
          </a>
        </div>
      </div>
      <div className="w-full py-2">
        <div className="w-full flex justify-center">
          <a
            href="mailto:lemmusm@gmail.com"
            rel="noopener noreferrer"
            className="gradientText"
            target="_blank"
          >
            lemmusm@gmail.com
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
