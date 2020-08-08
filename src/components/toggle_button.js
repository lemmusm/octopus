import React from "react"
import Sun from "../assets/svg/sun.svg"
import Moon from "../assets/svg/moon.svg"

const ToggleButton = ({ toggleTheme }) => {
  let getThemeLocalStorage = localStorage.getItem("theme")
  return (
    <>
      <button className="toggleBtn" onClick={toggleTheme}>
        {getThemeLocalStorage === "light" ? <Moon /> : <Sun />}
      </button>
    </>
  )
}

export default ToggleButton
