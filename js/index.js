function _( el ) { return document.querySelector(el) }
function $( el ) { return Array.from(document.querySelectorAll(el)) }


const dark = '#111'
const light = '#fefefe'
const darkblue = '#002573'
const yellow = '#f7d708'
const tan = '#FFDBB5'
const ice = '#F1FAEE'
const lightTan = 'floralwhite'
const red = '#B80C09'
const pink = '#FF8484'
const green = '#239a3b'

const ONE_MINUTE = 60000

const colors = [
	{ background: lightTan, lightText: false },
	{ background: dark, lightText: true },
	{ background: darkblue, lightText: true },
	{ background: ice, lightText: false },
	{ background: yellow, lightText: false },
	{ background: tan, lightText: false },
	{ background: red, lightText: true },
	{ background: pink, lightText: true },
	{ background: green, lightText: true },
]

function setDarkHoverStates() {
	Array.from($('a')).forEach(link => {
		link.classList.add('dark-link--hover')
		link.classList.remove('light-link--hover')
	})
}

function setLightHoverStates() {
	Array.from($('a')).forEach(link => {
		link.classList.add('light-link--hover')
		link.classList.remove('dark-link--hover')
	})
}

let index = 0;

_('footer a').addEventListener('click', (event) => {

	// set next background color
	_('body').style.backgroundColor = colors[index].background
	
	// set appropriate text shade and hover states
	if (colors[index].lightText === true) {
		_('body').style.color = light
		_('#shuffle path').setAttribute('fill', `${light}`)
		setLightHoverStates()
	} else {
		_('body').style.color = dark
		_('#shuffle path').setAttribute('fill', `${dark}`)
		setDarkHoverStates()
	}

	// if last color in array, jump back to beginning
	index = (index === colors.length-1) ? 0 : index+1

})

document.addEventListener('DOMContentLoaded', () => {
	setDarkHoverStates()

	setInterval(() => {
		_('footer a').classList.add('fade-in')
	}, ONE_MINUTE/2)

})