import React from "react"
import Sun from "../assets/svg/sun.svg"
import Moon from "../assets/svg/moon.svg"

const ToggleButton = ({ toggleTheme, theme }) => {
  const storedTheme =
    typeof window !== "undefined" && window.localStorage.getItem("theme")

  return (
    <>
      <button className="toggleBtn" onClick={toggleTheme}>
        {theme === "light" ? (
          <Moon />
        ) : storedTheme === "light" ? (
          <Moon />
        ) : (
          <Sun />
        )}
      </button>
    </>
  )
}

export default ToggleButton
