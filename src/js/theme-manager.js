import { COLORS, THEMES, DARK_THEME, LIGHT_THEME } from "./themes"

const randomInt = max => {
	return Math.floor(Math.random() * (max + 1))
}

/**
 * Wrapper function that makes document.querySelectorAll return an Array
 * instead of a NodeList
 */
const querySelectorAll = selector => [...document.querySelectorAll(selector)]

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
		// get a random theme
		let nextRandInt = null
		do {
			nextRandInt = randomInt(THEMES.length - 1)
		} while (nextRandInt === this.currentIndex)
		const nextTheme = THEMES[nextRandInt]

		// set next theme
		this.setTheme(nextTheme)
		this.currentIndex = nextRandInt
	}

	/**
	 * Apply the provided theme by updating certain elements' inline styles
	 */
	setTheme(theme) {
		const { backgroundColor, textColor, linkColor } = theme

		// get target elements
		const body = document.querySelector("body")
		const paragraphs = querySelectorAll("p")
		const links = querySelectorAll("a")
		const icons = querySelectorAll("svg")

		// apply styles
		body.style.background = backgroundColor
		body.style.color = textColor
		links.forEach(link => (link.style.color = linkColor))
		paragraphs.forEach(paragraph => (paragraph.style.color = textColor))
		icons.forEach(icon => (icon.style.fill = textColor))
	}

	/**
	 * Set the initial theme based on the time of day (dark/light mode).
	 */
	setInitialTheme() {
		// Get the theme whose index position in the THEMES array corresponds to
		// the current hour of day
		const numThemes = THEMES.length
		const now = new Date()
		const currentHour = now.getHours()
		// Use dark theme after 5pm (17th hour)
		const currentThemeName = currentHour > 17 ? "dark" : "light"
		this.setTheme(THEMES.find(theme => theme.name === currentThemeName))
	}
}
export default ThemeManager
