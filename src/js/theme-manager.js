import { THEMES, DARK_THEME, LIGHT_THEME, BLUE_THEME } from "./themes"

class ThemeManager {
	constructor() {
		this.setTheme = this.setTheme.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
		this.currentIndex = 0
	}

	/**
	 * Update the theme when the user clicks the emoji button
	 */
	listen() {
		document.querySelector("#update-theme-button").addEventListener("click", this.handleUpdate)
	}

	handleUpdate() {
		// Get a random theme
		const randomInt = max => Math.floor(Math.random() * (max + 1))
		// Keep getting new theme until it's different than the current one
		do {
			var nextInt = randomInt(THEMES.length - 1)
		} while (nextInt === this.currentIndex)
		const nextTheme = THEMES[nextInt]

		// Set next theme
		this.setTheme(nextTheme)
		this.currentIndex = nextInt
	}

	/**
	 * Apply a theme by updating CSS custom properties
	 */
	setTheme(theme) {
		const rootElement = document.querySelector(":root")
		for (let key in theme) {
			const cssVarKey = key.replace(/_/g, "-")
			rootElement.style.setProperty(cssVarKey, theme[key])
		}
	}

	/**
	 * Set the initial theme based on the following factors:
	 * 1. User-defined preferences (if supported) (Firefox only for now)
	 * 2. Time of day, if user preferences aren't supported
	 */
	setInitialTheme() {
		const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
		const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
		const noPreference = window.matchMedia("(prefers-color-scheme: no-preference)").matches
		const noSupport = !prefersDarkMode && !prefersLightMode && !noPreference

		if (noSupport || noPreference) {
			// Get the current hour
			const now = new Date()
			const hour = now.getHours()
			// Use dark theme before 5 a.m. and after 5 p.m.
			const theme = hour < 5 || hour > 17 ? DARK_THEME : LIGHT_THEME
			this.setTheme(theme)
		} else {
			if (prefersDarkMode) setTheme(DARK_THEME)
			if (prefersLightMode) setTheme(LIGHT_THEME)
		}
	}
}
export default ThemeManager
