import Theme from "./theme"

const Cube = {
	cube: null,

	init: function() {
		this.cube = document.querySelector(".cube")
		this.listen()
	},

	listen: function() {
		// randomize theme on click
		this.cube.addEventListener("click", (e) => {
			Theme.random()
		})
	},
}

export default Cube
