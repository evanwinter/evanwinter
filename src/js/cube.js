import Theme from "./theme"

const Cube = {
	cube: null,

	init: function() {
		this.cube = document.querySelector(".cube")
		this.cube.addEventListener("click", (e) => {
			Theme.invert()
		})
	},
}

export default Cube
