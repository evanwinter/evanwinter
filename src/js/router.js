import * as templates from "./templates"
import anime from "animejs"

import Theme from "./theme"
import Content from "./content"

const Router = {
	root: null,
	rootClass: `#content-root`,
	controller: null,
	controllerClass: `.content-nav`,

	init: function() {
		// init elements
		this.root = document.querySelector(this.rootClass)
		this.controller = document.querySelector(this.controllerClass)

		// handle direct navigation to a page
		this.refresh()

		// listen for page updates
		this.listen()
	},

	listen: function() {
		// listen for content navigation clicks
		this.controller.addEventListener("click", this.navigate.bind(this))

		// listen for browser 'back' and 'forward' actions
		window.onpopstate = () => this.refresh()
	},

	getCurrentRoute: function() {
		const { pathname } = window.location
		return pathname.substr(1, pathname.length)
	},

	refresh: function() {
		const currentRoute = this.getCurrentRoute()
		this.transitionTo(currentRoute)
	},

	navigate: function(e) {
		e.preventDefault()

		const { route } = e.target.dataset
		const currentRoute = this.getCurrentRoute()

		// if no route or we're already on this route, quit
		if (!route || route === currentRoute) return

		this.transitionTo(route)
	},

	transitionTo: function(route) {
		// default transition options
		const defaults = {
			easing: `easeInOutQuad`,
			duration: 250,
		}

		// define `hide` animation
		const hideOptions = {
			targets: this.rootClass,
			translateY: `2rem`,
			opacity: 0,
		}

		// define `show` animation
		const showOptions = {
			targets: this.rootClass,
			translateY: `0rem`,
			opacity: 1,
		}

		// create animejs timeline w/ defaults
		const timeline = anime.timeline(defaults)

		// add each transition step (hide, then update content, then show)
		timeline
			.add({
				...hideOptions,
				complete: () => {
					window.history.replaceState(null, null, route)
					this.render(route)
					Content.destroy()
					Content.init()
				},
			})
			.add(showOptions)
	},

	isNotFound: function(route) {
		return !templates[route] && route.length > 0
	},

	setThemeForRoute: function(route) {
		switch(route) {
			case "work":
				Theme.set("dark")
				break
			case "about":
				Theme.set("blue")
				break
			case "contact":
				Theme.set("light")
				break
			default:
				break
		}
	},

	getContentForRoute: function(route) {
		const content = templates[route]
		const notFoundContent = templates[`notfound`]

		const noContentForRoute = this.isNotFound(route)
		if (noContentForRoute) return notFoundContent

		// this.setThemeForRoute(route)

		return content || ''
	},

	render: function(route) {
		const nextContent = this.getContentForRoute(route)
		this.root.innerHTML = nextContent
	},
}

export default Router
