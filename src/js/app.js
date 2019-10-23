import Router from "./router"
import Cube from "./cube"
import Theme from "./theme"

const App = {
	init: function() {
		Router.init()
		Cube.init()
		Theme.init()
	},
}

export default App
