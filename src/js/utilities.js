const getRandomNumber = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomColor = () => {
	const colors = [
		'red',
		'white',
		'blue',
		'green'
	]
	return colors[getRandomNumber(0, 3)]
}

export default {
	getRandomNumber,
	getRandomColor
}