// Import styles
import "../scss/index.scss"

// Detect characteristics of current device
import device from "current-device"

import typography from "./typography"

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
			this.cube.classList.toggle("colors")
			// this.invertTheme()
		})
	},

	invertTheme: function() {
		this.body.classList.toggle("inverted")
	},

}

document.addEventListener("DOMContentLoaded", () => {
	App.init()
})