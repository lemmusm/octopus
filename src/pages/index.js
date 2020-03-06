import React from "react"
import TextLoop from "react-text-loop"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArrowDown from "../assets/svg/arrow-down.svg"
import Servicios from "../components/services"
import Proyectos from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="lg:mt-20 xl:0 p-5 flex flex-wrap">
      <div className="flex w-full py-20 p-3 text-center items-center font-bold">
        <div className="font-light text-5xl md:text-6xl">
          I make web and mobile products with{" "}
          <TextLoop>
            <span className="font-bold gradientText">Javascript.</span>
            <span className="font-bold gradientText">Angular.</span>
            <span className="font-bold gradientText">Reactjs.</span>
            <span className="font-bold gradientText">Flutter.</span>
          </TextLoop>{" "}
        </div>
      </div>

      <div className="flex w-full items-center justify-center mb-4">
        <ArrowDown className="bounce" />
      </div>

      <div className="mt-24">
        <h1 className="text-4xl sm:text-5xl gradientText">Resume</h1>
        <p className="mt-6 font-light">
          I have experience in different technologies and programming languages
          like
          <strong> Javascript, HTML, CSS, PHP, MySQL, REST Web Services</strong>
          ; just to mention some of them.
        </p>
        <p className="flex w-full mt-5 font-light">
          Work with frameworks and libraries like with Angular, React.js,
          Next.js and Gatsby in Front-end; Back-end with Laravel, MongoDB and
          Node.js to create REST services in addition to Firebase for
          authentication and realtime database.
        </p>
      </div>

      <div className="mt-20 w-full">
        <h1 className="flex w-full text-right text-4xl sm:text-5xl gradientText">
          Services
        </h1>

        <Servicios />
      </div>

      <div className="mt-20 w-full">
        <h1 className="flex w-full text-right text-4xl sm:text-5xl gradientText">
          Projects
        </h1>
        <div className="flex w-full mt-6 font-light sm:text-2xl">
          <Proyectos />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
