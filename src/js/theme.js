import Utils from "./utilities"

const Theme = {
	body: null,

	themeIndex: 0,
	themes: ["dark", "light", "blue", "red", "yellow", "orange"],

	init: function() {
		this.body = document.querySelector("body")
	},

	set: function(theme) {
		this.body.dataset.theme = theme
	},

	cycle: function() {
		// if at end of theme array, start over at 0
		if (this.themeIndex === this.themes.length - 1) this.themeIndex = -1

		const nextTheme = this.themes[++this.themeIndex]
		this.set(nextTheme)
	},

	invert: function() {
		const currentTheme = this.body.dataset.theme
		if (!["dark", "light"].includes(currentTheme)) return null
		const nextTheme = currentTheme === "dark" ? "light" : "dark"
		this.set(nextTheme)
	},

	random: function() {
		const color = this.getRandomColor()
		this.body.dataset.theme = color
	},

	getRandomColor: function() {
		const currentTheme = this.body.dataset.theme
		const otherThemes = this.themes.filter((theme) => theme !== currentTheme) // don't repeat themes
		const randomIndex = Utils.getRandomNumber(0, otherThemes.length - 1)
		return otherThemes[randomIndex]
	},
}

export default Theme
