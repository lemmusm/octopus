import React from "react"
import TextLoop from "react-text-loop"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import ArrowDown from "../assets/svg/arrow-down.svg"
import Servicios from "../components/services"
import Proyectos from "../components/projects"

const scrollDown = () => {
  window.scroll({
    top: 500,
    left: 100,
    behavior: "smooth",
  })
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="lg:mt-20 xl:0 p-5 flex flex-wrap">
      <div className="flex w-full py-20 p-3 text-center items-center font-bold">
        <div className="font-light text-5xl md:text-6xl">
          I make web and mobile products with{" "}
          <TextLoop>
            <span className="font-bold gradientTitle">Javascript.</span>
            <span className="font-bold gradientTitle">React.</span>
            <span className="font-bold gradientTitle">Angular.</span>
            <span className="font-bold gradientTitle">Flutter.</span>
            <span className="font-bold gradientTitle">NodeJS.</span>
            <span className="font-bold gradientTitle">PHP.</span>
            <span className="font-bold gradientTitle">and more.</span>
          </TextLoop>{" "}
        </div>
      </div>

      <div className="flex w-full items-center justify-center mb-4">
        <ArrowDown onClick={scrollDown} className="bounce" />
      </div>

      <div className="mt-24">
        <h1 className="text-4xl sm:text-5xl gradientTitle">Resume</h1>
        <p className="mt-6 font-light">
          I have experience in different technologies and programming languages,
          in Frontend I work with JavaScript / Typecript (Angular, React), for
          mobile development I use Dart (Flutter), in Backend NodeJS, PHP
          (Laravel / CodeIgniter) with MySQL and for the deployment of the
          applications (AWS, Netlify, Firebase, Github).
        </p>
      </div>

      <div className="mt-20 w-full">
        <h1 className="text-4xl sm:text-5xl gradientTitle">Services</h1>

        <Servicios />
      </div>

      <div className="mt-20 w-full">
        <h1 className="text-4xl sm:text-5xl gradientTitle">Projects</h1>
        <div className="flex w-full mt-6 font-light sm:text-2xl">
          <Proyectos />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
