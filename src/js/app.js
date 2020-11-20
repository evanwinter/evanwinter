import Router from "./components/router"
import Theme from "./components/theme"
import Nav from "./components/nav"

const App = {
	init: () => {
		Router.init()
    Theme.init()
    Nav.init()
	},
}

export default App
