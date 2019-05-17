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

export const THEMES = [
	{ name: 'dark', __background_color: dark, __text_color: light, __link_color: light },
	{ name: 'light', __background_color: light, __text_color: dark, __link_color: dark },
	{ name: 'darkblue', __background_color: darkblue, __text_color: light, __link_color: light },
	{ name: '', __background_color: green, __text_color: light, __link_color: light },
	{ name: '', __background_color: ice, __text_color: dark, __link_color: dark },
	{ name: '', __background_color: red, __text_color: light, __link_color: light },
	{ name: '', __background_color: tan, __text_color: dark, __link_color: dark },
	{ name: '', __background_color: yellow, __text_color: dark, __link_color: dark },
	{ name: '', __background_color: papayawhip, __text_color: dark, __link_color: dark },
	{ name: '', __background_color: orange, __text_color: dark, __link_color: dark },
]

export const DARK_THEME = THEMES.find(theme => theme.name === 'dark')
export const LIGHT_THEME = THEMES.find(theme => theme.name === 'light')
export const BLUE_THEME = THEMES.find(theme => theme.name === 'darkblue')