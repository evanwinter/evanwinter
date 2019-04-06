import { COLORS, THEMES, DARK_THEME, LIGHT_THEME } from './themes'

const randomIntFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Wrapper function that makes document.querySelectorAll return an Array
 * instead of a NodeList
 */
const querySelectorAll = selector => [...document.querySelectorAll(selector)]

class ThemeManager {
	constructor() {
		this.trigger = document.querySelector('#secret-button')
		this.setTheme = this.setTheme.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
		this.currentIndex = 0
	}

	listen() {
		this.trigger.addEventListener('click', this.handleUpdate)
	}

	unlisten() {
		this.trigger.removeEventListener('click', this.handleUpdate)
	}

	handleUpdate() {
		// get a random theme
		let nextRandInt = null
		do {
			nextRandInt = randomIntFromInterval(0, THEMES.length - 1)
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
		const body = document.querySelector('body')
		const paragraphs = querySelectorAll('p')
		const links = querySelectorAll('a')
		const icons = querySelectorAll('svg')

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
		let currentHour = now.getHours()
		while (currentHour >= numThemes) currentHour = currentHour - numThemes
		this.setTheme(currentHour > 17 ? DARK_THEME : LIGHT_THEME)
	}
}
export default ThemeManager
