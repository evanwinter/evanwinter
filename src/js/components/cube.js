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
			Theme.random()
		})
	},

	form: function() {
		const sides = Array.from(document.querySelectorAll(".cube .side"))
		let i = 0
		const interval = setInterval(() => {
			sides[i].classList.remove("after")

			if (i === sides.length - 1) clearInterval(interval)

			i++
		}, 250)
	},
}

export default Cube
