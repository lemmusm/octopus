import React from "react"
import Sun from "../assets/svg/sun.svg"
import Moon from "../assets/svg/moon.svg"

const ToggleButton = ({ toggleTheme }) => {
  const storedTheme =
    typeof window !== "undefined" && window.localStorage.getItem("theme")
  return (
    <>
      <button className="toggleBtn" onClick={toggleTheme}>
        {storedTheme === "light" ? <Moon /> : <Sun />}
      </button>
    </>
  )
}

export default ToggleButton
