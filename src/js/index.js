/**
 * Main app entry
 */

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
const orange = "orange"
const green = "#239a3b"
const papayawhip = "papayawhip"

const COLORS = {
	// monochromatic
	dark: "#111",
	gray: "#888888",
	light: "#fefefe",

	blue: "blue",
	green: "#239a3b",
	yellow: "#f7d708",
	red: "#B80C09",
	pink: "#FF8484",
	orange: "orange",

	darkblue: "#002573",
	tan: "#FFDBB5",
	ice: "#F1FAEE",
	papayawhip: "papayawhip"
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

class ThemeManager {
	constructor() {
		this.trigger = document.querySelector("#secret-button")
		this.setTheme = this.setTheme.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
	}

	listen() {
		this.trigger.addEventListener("click", this.handleUpdate)
	}

	unlisten() {
		this.trigger.removeEventListener("click", this.handleUpdate)
	}

	handleUpdate() {
		// get a random themes
		const randInt = randomIntFromInterval(0, THEMES.length - 1)
		const nextTheme = THEMES[randInt]

		// set next theme
		this.setTheme(nextTheme)
	}

	setTheme(theme) {
		const { background, color, linkColor } = theme

		// get target elements
		const body = _("body")
		const paragraphs = $("p")
		const links = $("a")

		// apply styles
		body.style.background = background
		body.style.color = color
		links.forEach(link => (link.style.color = linkColor))
		paragraphs.forEach(paragraph => (paragraph.style.color = color))
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

		// this.setTheme(THEMES[n])
		this.setTheme(THEMES[1])
	}
}

const randomIntFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

document.addEventListener("DOMContentLoaded", () => {
	main()
})

function showSplash(duration) {
	const hello = document.querySelector("#hello")
	setTimeout(() => {
		hello.classList.add("animate-in")
	}, 0)
	setTimeout(() => {
		hello.classList.remove("animate-in")
	}, duration / 2)
}

function main() {
	// listen for theme changes
	const themeManager = new ThemeManager()
	// themeManager.setInitialTheme()
	themeManager.listen()

	const showSplashPage = false
	const splashDuration = 3000
	if (showSplashPage) showSplash(splashDuration)

	setTimeout(
		() => {
			Array.from(document.querySelectorAll(".animate")).forEach(el =>
				el.classList.add("animate-in")
			)
		},
		showSplashPage ? splashDuration : 1000
	)
}
