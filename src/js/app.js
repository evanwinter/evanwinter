import Content from "./content"
import Cube from "./cube"
import Theme from "./theme"

const App = {
	init: function() {
		Content.init()
		Cube.init()
		Theme.init()
	}
}

export default App