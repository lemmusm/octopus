import React from "react"
import WebsiteIcon from "../assets/svg/website.svg"
import AppsIcon from "../assets/svg/apps.svg"
import WebappIcon from "../assets/svg/webapp.svg"
import MarketingIcon from "../assets/svg/marketing.svg"

const Servicios = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full sm:w-1/2 py-5">
        <div className="justify-center flex w-full">
          <WebsiteIcon className="pulso" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center py-3">
            Websites
          </div>
          <p className="colorText text-base py-4">
            I used technologies like html, css, bootstrap, tailwind, javascript,
            gatsby, next.js, angular universal; build functional websites,
            thoroughly planned, custom coded and tested.
          </p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 py-5">
        <div className="justify-center flex">
          <AppsIcon className="pulso" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center py-3">Apps</div>
          <p className="colorText text-base py-4">
            I build cross-platform applications for iOS and Android with
            Flutter, saving time and costs in its development.
          </p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 py-5">
        <div className="justify-center flex">
          <WebappIcon className="pulso" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center py-3">
            Web Apps
          </div>
          <p className="colorText text-base">
            Web applications created according to customer needs with
            technologies like Angular or React, easy to maintain and interact
            with the end user.
          </p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 py-5">
        <div className="justify-center flex">
          <MarketingIcon className="pulso" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center py-3">
            Digital Marketing
          </div>
          <p className="colorText text-base">
            Digital Marketing in broad terms is any tool, strategy, or method
            which helps to make your company more searchable and more recognized
            by your potential clients.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Servicios
