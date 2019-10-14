import Utils from "./utilities"

const Theme = {
	body: null,

	themes: [
		{
			dark: {
				body: $black,
				text: $white,
			}
		},
		{
			light: {
				body: $white,
				text: $black,
			},
		},
		{
			blue: {
				body: $blue,
				text: $white
			}
		}
	],

	init: function() {
		this.body = document.querySelector("body")
	},

	set: function(theme) {
		this.body.dataset.theme = theme
	},

	invert: function() {
		const currentTheme = this.body.dataset.theme
		const nextTheme = currentTheme === "dark" ? "light" : "dark"
		this.set(nextTheme)
	},

	random: function() {
		const color = this.getRandomColor()
		this.body.dataset.background = color
	},

	getRandomColor: function() {
		const randomIndex = Utils.getRandomNumber()
		return this.themes[randomIndex]
	},
}

export default Theme
