import * as templates from "./templates"
import anime from "animejs"

const ContentController = {

	/**
	 * Declare elements
	 */
	root: null,
	rootClass: `#content-root`,
	controller: null,
	controllerClass: `.content-nav`,

	/**
	 * Initialize elements, content and listeners.
	 */
	init: function() {
		// init elements
		this.root = document.querySelector(this.rootClass)
		this.controller = document.querySelector(this.controllerClass)

		// handle direct navigation to a page
		this.showCurrentPathContent()

		// listen for page updates
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

		// if no content type, or if we're already showing this content, quit
		if (!contentType || contentType === path) return

		// if there's new content to show, update the content
		this.transitionTo(contentType)
	},

	transitionTo: function(contentType) {
		// default transition options
		const defaults = {
			easing: `easeInOutQuad`,
			duration: 250
		}

		// define `hide` animation
		const hideOptions = {
			targets: this.rootClass,
			translateY: `2rem`,
			opacity: 0
		}

		// define `show` animation
		const showOptions = {
			targets: this.rootClass,
			translateY: `0rem`,
			opacity: 1
		}

		// create animejs timeline w/ defaults
		const timeline = anime.timeline(defaults)

		// add each transition step (hide, then update content, then show)
		timeline.add({
			...hideOptions,
			complete: () => {
				window.history.pushState(null, null, contentType)
				this.show(contentType)
			}
		}).add(showOptions)
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

		// check if there's a template matching the current path
		if (templates[path]) {
			// if yes, show that template
			const contentType = path
			this.show(contentType)
		} else if (path.length > 0) {
			this.show(`notfound`)
		}
	}

}

export default ContentController