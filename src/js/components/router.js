import * as templates from "./templates"
import anime from "animejs"

import Transition from "./transition"
import Theme from "./theme"

const Router = {
	root: null,
	rootClass: `#content-root`,
	controller: null,
	controllerClass: `.nav`,

	init: function() {
		anime({
			targets: ".anim.ease-in",
			opacity: 1,
			// translateY: 0,
			duration: 3000,
			delay: 500,
			// delay: anime.stagger(500)
		})

		// init elements
		this.root = document.querySelector(this.rootClass)
		this.controller = document.querySelector(this.controllerClass)

		this.links = Array.from(this.controller.querySelectorAll("a"))

		// listen for page updates
		this.listen()

		// handle direct navigation to a page
		this.refresh()
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
		Transition.to(currentRoute, this.render.bind(this))
	},

	navigate: function(e) {
		const { route } = e.target.dataset

		// if (route)
		// 	e.preventDefault()

		const currentRoute = this.getCurrentRoute()

		// if no route or we're already on this route, quit
		if (!route || route === currentRoute) return

		Transition.to(route, this.render.bind(this))
	},

	isNotFound: function(route) {
		return !templates[route] && route.length > 0
	},

	setThemeForRoute: function(route) {
		switch (route) {
			case "work":
				// Theme.set("dark")
				break
			case "about":
				// Theme.set("blue")
				break
			case "contact":
				// Theme.set("light")
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
