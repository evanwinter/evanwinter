// Import styles
import "../scss/index.scss"

// Detect characteristics of current device
import device from "current-device"

import typography from "./typography"

const randomColor = () => {
	const colors = [
		'red',
		'white',
		'blue',
		'green'
	]
	const randomNumber = (min, max) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	return colors[randomNumber(0, 3)]
}

const App = {
	body: null,
	cube: null,

	init: function() {
		this.body = document.querySelector("body")
		this.cube = this.body.querySelector(".cube")
		this.initCube()
	},

	initCube: function() {
		this.cube.addEventListener("click", (e) => {
			// this.body.style.background = randomColor()
			this.invertTheme()
			// this.invertCube()
		})
	},

	invertTheme: function() {
		this.body.classList.toggle("inverted")
	},

	invertCube: function() {
		// this.cube.classList.toggle("colors")
		this.cube.classList.toggle("inverted")
	},
}

document.addEventListener("DOMContentLoaded", () => {
	App.init()
})
