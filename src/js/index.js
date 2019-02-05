/*
 *	Main app entry
 */

// Import styles
import styles from "../scss/styles.scss"

function _(el) {
	return document.querySelector(el)
}
function $(el) {
	return Array.from(document.querySelectorAll(el))
}

const dark = "#111"
const light = "#fefefe"
const darkblue = "#002573"
const yellow = "#f7d708"
const tan = "#FFDBB5"
const ice = "#F1FAEE"
const lightTan = "floralwhite"
const red = "#B80C09"
const pink = "#FF8484"
const green = "#239a3b"
const papayawhip = "papayawhip"

const THEMES = [
	{ 
		background: dark, 
		color: light, 
		linkColor: light 
	},
	{ 
		background: light, 
		color: dark, 
		linkColor: dark 
	},
	{ 
		background: darkblue, 
		color: light, 
		linkColor: light 
	},
	{ 
		background: green, 
		color: light, 
		linkColor: light 
	},
	{ 
		background: ice, 
		color: dark, 
		linkColor: dark 
	},
	{ 
		background: pink, 
		color: light, 
		linkColor: light 
	},
	{ 
		background: red, 
		color: light, 
		linkColor: light 
	},
	{ 
		background: tan, 
		color: dark, 
		linkColor: dark 
	},
	{ 
		background: yellow, 
		color: dark, 
		linkColor: dark 
	},
	{ 
		background: papayawhip, 
		color: dark, 
		linkColor: dark 
	},
]

class ThemeManager {
	constructor() {
		this.trigger = document.querySelector("#secret-button")
	}

	listen() {
		this.trigger.addEventListener("click", this.handleUpdate)
	}

	unlisten() {
		this.trigger.removeEventListener("click", this.handleUpdate)
	}

	handleUpdate() {
		// get a random themes
		const randInt = randomIntFromInterval(0, THEMES.length-1)
		const nextTheme = THEMES[randInt]
		const { background, color, linkColor } = nextTheme

		// get target elements
		const body = _("body")
		const links = $("a")

		// apply styles
		body.style.background = background
		body.style.color = color
		links.forEach(link => link.style.color = linkColor)

	}

}

const randomIntFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

document.addEventListener("DOMContentLoaded", () => {
	main()
})

function main() {

	// const hello = document.querySelector("#hello")
	// setTimeout(() => {
	// 	hello.classList.add("animate-in")
	// }, 0)

	// setTimeout(() => {
	// 	hello.classList.remove("animate-in")
	// }, 2000)

	setTimeout(() => {
		Array.from(document.querySelectorAll(".animate")).forEach(el => el.classList.add("animate-in"))
	}, 100)

	// listen for theme changes
	const themeManager = new ThemeManager()
	themeManager.listen()

}