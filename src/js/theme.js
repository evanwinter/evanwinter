const dark = "#111"
const gray = "#888888"
const light = "#fefefe"
const darkblue = "#002573"
const yellow = "#f7d708"
const tan = "#FFDBB5"
const ice = "#F1FAEE"
const lightTan = "floralwhite"
const red = "#B80C09"
const pink = "#FF8484"
const orange = "orange"
const green = "green"
const papayawhip = "papayawhip"

const COLORS = {
	dark: dark,
	gray: gray,
	light: light,
	green: green,
	yellow: yellow,
	red: red,
	pink: pink,
	orange: orange,
	darkblue: darkblue,
	tan: tan,
	ice: ice,
	papayawhip: papayawhip
}

const THEMES = [
	{ background: dark, color: light, linkColor: light },
	{ background: light, color: dark, linkColor: dark },
	{ background: darkblue, color: light, linkColor: light },
	{ background: green, color: light, linkColor: light },
	{ background: ice, color: dark, linkColor: dark },
	{ background: pink, color: light, linkColor: light },
	{ background: red, color: light, linkColor: light },
	{ background: tan, color: dark, linkColor: dark },
	{ background: yellow, color: dark, linkColor: dark },
	{ background: papayawhip, color: dark, linkColor: dark },
	{ background: orange, color: dark, linkColor: dark }
]

const randomIntFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const $ = selector => {
	return [...document.querySelectorAll(selector)]
}

class ThemeManager {
	constructor() {
		this.trigger = document.querySelector("#secret-button")
		this.setTheme = this.setTheme.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
		this.currentIndex = 0
	}

	listen() {
		this.trigger.addEventListener("click", this.handleUpdate)
	}

	unlisten() {
		this.trigger.removeEventListener("click", this.handleUpdate)
	}

	handleUpdate() {
		// get a random themes
		let nextRandInt = null
		do {
			nextRandInt = randomIntFromInterval(0, THEMES.length - 1)
		} while (nextRandInt === this.currentIndex)
		const nextTheme = THEMES[nextRandInt]

		// set next theme
		this.setTheme(nextTheme)
		this.currentIndex = nextRandInt
	}

	setTheme(theme) {
		const { background, color, linkColor } = theme

		// get target elements
		const body = document.querySelector("body")
		const paragraphs = $("p")
		const links = $("a")
		const icons = $("svg")

		// apply styles
		body.style.background = background
		body.style.color = color
		links.forEach(link => (link.style.color = linkColor))
		paragraphs.forEach(paragraph => (paragraph.style.color = color))
		icons.forEach(icon => (icon.style.fill = color))
	}

	setInitialTheme() {
		// set initial theme based on time of day (sort of)
		const now = new Date()
		const hours = now.getHours()
		const numThemes = THEMES.length
		// if hours is greater than number of themes, keep wrapping around the list
		let n = hours
		while (n >= numThemes) {
			n = n - numThemes
		}

		if (hours > 17) {
			this.setTheme(THEMES[0])
		} else {
			this.setTheme(THEMES[1])
		}

		// this.setTheme(THEMES[n])
		// this.setTheme(THEMES[n])
		this.currentIndex = n
	}
}
export default ThemeManager
