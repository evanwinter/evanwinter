import Theme from "./theme"

const Cube = {
	cube: null,

	init: function() {
		this.cube = document.querySelector(".cube")
		this.listen()
		this.form()
	},

	listen: function() {
		this.cube.addEventListener("click", (e) => {
			Theme.randomize()
		})
	},

	form: function() {
		const sides = Array.from(document.querySelectorAll(".cube .side"))
		this.stagger(sides, true)
	},

	deform: function() {
		const sides = Array.from(document.querySelectorAll(".cube .side"))
		this.stagger(sides, false)
	},

	stagger: function(sides, staggerIn) {
		let i = 0
		const interval = setInterval(() => {
			staggerIn
				? sides[i].classList.remove("skew")
				: sides[i].classList.add("skew")

			if (i === sides.length - 1) {
				clearInterval(interval)
			}

			i++
		}, 100)
	},
}

export default Cube
