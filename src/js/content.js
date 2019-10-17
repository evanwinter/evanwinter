import * as templates from "./templates"
import anime from "animejs"

const ContentController = {

	/**
	 * Declare elements
	 */
	root: null,
	controller: null,

	/**
	 * Initialize elements, content and listeners.
	 */
	init: function() {
		this.root = document.querySelector("#content-root")
		this.controller = document.querySelector(".content-nav")

		this.showCurrentPathContent()

		this.listen()
	},

	/**
	 * Set up listeners for both content navigation and browser 'back'
	 * and 'forward' actions.
	 */
	listen: function() {
		// listen for content navigation clicks
		this.controller.addEventListener('click', this.handleContentUpdate.bind(this))

		// listen for browser 'back' and 'forward' actions
		window.onpopstate = () => {
			this.showCurrentPathContent()
		}
	},

	handleContentUpdate: function(e) {
		e.preventDefault()

		// if the clicked element was a content nav item, get the content type to show
		const { contentType } = e.target.dataset
		const path = window.location.pathname.substr(1, window.location.pathname.length)
		if (!contentType || contentType === path) return


		const tl = anime.timeline({
			easing: `easeInOutQuad`,
			duration: 250
		})

		tl.add({
			targets: '#content-root',
			translateY: '2rem',
			opacity: 0,
			complete: () => {
				// update the URL without reloading page
				window.history.pushState(null, null, contentType)
				
				// show the content of the given content type
				this.show(contentType)
			}
		}).add({
			targets: '#content-root',
			translateY: '0rem',
			opacity: 1,	
		})
	},

	/**
	 * Show content of the given content type.
	 */
	show: function(contentType) {
		const content = templates[contentType]
		if (!!content) {
			this.root.innerHTML = content
		} else {
			throw new Error("No template provided for this path.")
		}
	},

	/**
	 * Show content for the current path.
	 */
	showCurrentPathContent: function() {
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