import Router from "./components/router"
import Cube from "./components/cube"
import Theme from "./components/theme"

const App = {
	init: () => {
		Router.init()
		Cube.init()
		Theme.init()
	},
}

export default App
