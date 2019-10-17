import * as templates from "./templates"

const ContentController = {

	root: null,
	controller: null,

	init: function() {
		this.root = document.querySelector("#content-root")
		this.controller = document.querySelector(".content-nav")

		this.adjustForCurrentPage()

		this.listen()
	},

	listen: function() {
		this.controller.addEventListener('click', (e) => {
			e.preventDefault()
			const { contentType } = e.target.dataset
			if (!contentType)
				return null

			window.history.pushState(null, null, contentType)
			this.show(contentType)
		})

		window.onpopstate = () => {
			this.adjustForCurrentPage()
		}
	},

	show: function(contentType) {
		this.hidePrevious()

		const content = templates[contentType]
		if (!!content) {
			this.root.innerHTML = content
		} else {
			throw new Error("No template provided for this path.")
		}
	},

	hidePrevious: function() {
		this.root.innerHTML = ''
	},

	adjustForCurrentPage: function() {
		// get path without leading backslash
		const path = window.location.pathname.substr(1, window.location.pathname.length)

		// check for a match between pathname and template name
		const candidates = Object.keys(templates)
		if (candidates.includes(path)) {
			// if found, render that template
			this.show(path)
		}
	}

}

export default ContentController