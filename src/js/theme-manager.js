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
		this.setTheme = this.setTheme.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
		this.currentIndex = 0
	}

	listen() {
		document.querySelector("#secret-button").addEventListener("click", this.handleUpdate)
	}

	handleUpdate() {
		// get a random theme
		do { var nextInt = randomInt(THEMES.length - 1) } while (nextInt === this.currentIndex)
		const nextTheme = THEMES[nextInt]

		// set next theme
		this.setTheme(nextTheme)
		this.currentIndex = nextInt
	}

	/**
	 * Apply the provided theme by updating certain elements' inline styles
	 */
	setTheme(theme) {
		const rootElement = document.querySelector(':root')
		for (let key in theme) {
			const cssVarKey = key.replace(/_/g, '-')
			rootElement.style.setProperty(cssVarKey, theme[key])
		}
	}

	/**
	 * Set the initial theme based user preferences (if supported) or time of day
	 * if unsupported or if no preference is specified.
	 */
	setInitialTheme() {
		// Check for user preferences, if supported (Firefox only so far)
		const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
		const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
		const noPreference = window.matchMedia("(prefers-color-scheme: no-preference)").matches

		const noSupport = !prefersDarkMode && !prefersLightMode && !noPreference

		// If not supported or there's no preference specified, default to dark
		// or late based on time of day
		if (noSupport || noPreference) {
			// Get the current hour
			const now = new Date()
			const hour = now.getHours()
			// Use dark theme before 5 a.m. and after 5 p.m.
			const theme = hour < 5 || hour > 17? DARK_THEME : LIGHT_THEME
			console.log(`Setting to ${theme.name} mode based on current time of day.`)
			this.setTheme(theme)
		} else {
			if (prefersDarkMode) setTheme('dark')
			if (prefersLightMode) setTheme('light')
		}
	}
}
export default ThemeManager
