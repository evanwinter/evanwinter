import * as templates from "./templates"
import anime from "animejs"

import Theme from "./theme"

const Router = {
	root: null,
	rootClass: `#content-root`,
	controller: null,
	controllerClass: `.content-nav`,

	init: function() {
		// init elements
		this.root = document.querySelector(this.rootClass)
		this.controller = document.querySelector(this.controllerClass)

		this.links = Array.from(document.querySelectorAll(".content-nav a"))

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
		const { hash } = window.location
		return hash.substr(1, hash.length)
	},

	refresh: function() {
		const currentRoute = this.getCurrentRoute()
		this.transitionTo(currentRoute)
	},

	navigate: function(e) {
		const { route } = e.target.dataset

		// if (route)
		// 	e.preventDefault()

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
					// window.history.replaceState(null, null, route)
					this.render(route)
				},
			})
			.add(showOptions)
	},

	isNotFound: function(route) {
		return !templates[route] && route.length > 0
	},

	setThemeForRoute: function(route) {
		switch (route) {
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

		return content || ""
	},

	render: function(route) {
		const nextContent = this.getContentForRoute(route)

		if (nextContent && !this.isNotFound(route)) {
			this.links.forEach((link) => (link.dataset.active = "false"))
			const activeLink = this.links.find((link) => link.dataset.route === route)
			activeLink.dataset.active = "true"
		}

		this.root.innerHTML = nextContent
	},
}

export default Router
