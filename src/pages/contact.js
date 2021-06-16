import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import ContactMenu from "../routes/contact_menu"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="lg:mt-20 pt-20 xl:0 p-5 w-full flex flex-wrap">
        {ContactMenu.map((contacto, index) => {
          return (
            <div className="w-1/2 md:w-1/4 py-5" key={index}>
              <div className="w-full flex px-6 py-4 justify-center">
                <a
                  href={contacto.href}
                  className="linkContact"
                  rel="noopener noreferrer"
                  titlle={contacto.title}
                  target="_blank"
                >
                  {contacto.icon}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ContactPage
