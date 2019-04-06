const dark = '#111'
const gray = '#888888'
const light = '#fefefe'
const darkblue = '#002573'
const yellow = '#f7d708'
const tan = '#FFDBB5'
const ice = '#F1FAEE'
const lightTan = 'floralwhite'
const red = '#B80C09'
const pink = '#FF8484'
const orange = 'orange'
const green = 'green'
const papayawhip = 'papayawhip'

export const COLORS = {
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
	papayawhip: papayawhip,
}

export const THEMES = [
	{ name: 'dark', backgroundColor: dark, textColor: light, linkColor: light },
	{ name: 'light', backgroundColor: light, textColor: dark, linkColor: dark },
	{ name: 'darkblue', backgroundColor: darkblue, textColor: light, linkColor: light },
	{ name: '', backgroundColor: green, textColor: light, linkColor: light },
	{ name: '', backgroundColor: ice, textColor: dark, linkColor: dark },
	{ name: '', backgroundColor: pink, textColor: light, linkColor: light },
	{ name: '', backgroundColor: red, textColor: light, linkColor: light },
	{ name: '', backgroundColor: tan, textColor: dark, linkColor: dark },
	{ name: '', backgroundColor: yellow, textColor: dark, linkColor: dark },
	{ name: '', backgroundColor: papayawhip, textColor: dark, linkColor: dark },
	{ name: '', backgroundColor: orange, textColor: dark, linkColor: dark },
]

export const [DARK_THEME] = THEMES.filter(theme => theme['backgroundColor'] === dark)
export const [LIGHT_THEME] = THEMES.filter(theme => theme['backgroundColor'] === light)
export const [BLUE_THEME] = THEMES.filter(theme => theme['backgroundColor'] === darkblue)