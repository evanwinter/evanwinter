// Import styles
import "../scss/index.scss"

// Detect characteristics of current device
import device from "current-device"

// Import typography library
import Typography from "typography"

const typography = new Typography({
	baseFontSize: "16px",
	baseLineHeight: 1.5,
	headerFontFamily: ["Space Grotesk", "-apple-system", "system-ui", "sans-serif"],
	bodyFontFamily: ["Space Grotesk", "-apple-system", "system-ui", "sans-serif"],
})

typography.injectStyles()

const setInvertedText = () => {
	const h1 = document.querySelectorAll("main h1")
	const p = document.querySelectorAll("main p")
	const elements = [...h1, ...p]
	elements.forEach((el) => {
		el.classList.toggle("inverted-text")
	})
}

const setInvertedBody = () => {
	const body = document.querySelector("body")
	body.classList.toggle("inverted-body")
}

document.addEventListener("DOMContentLoaded", (e) => {
	const cube = document.querySelector(".cube")
	cube.addEventListener("click", (e) => {
		cube.classList.toggle("colors")
		setInvertedText()
		setInvertedBody()
	})
})
