// Import styles
import "../scss/index.scss"

// Detect characteristics of current device
import device from "current-device"

// Import typography library
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Space Grotesk', '-apple-system', 'system-ui', 'sans-serif'],
  bodyFontFamily: ['Space Grotesk', '-apple-system', 'system-ui', 'sans-serif'],
})

const setInvertedText = () => {
	document.querySelectorAll("")
}

typography.injectStyles()

document.addEventListener('DOMContentLoaded', (e) => {
	const cube = document.querySelector(".cube")
	const circle = document.querySelector(".circle")
	cube.addEventListener('click', (e) => {
		cube.classList.toggle("colors")
		circle.classList.toggle("expand")
		setInvertedText()
	})
})