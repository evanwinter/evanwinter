import * as templates from "./templates"

import Transition from "./transition"
import Theme from "./theme"

const Router = {
	root: null,
	rootClass: `#main`,
	controller: null,
	controllerClass: `.nav`,

	init: function() {
		this.initElements()

		// intial fade-in animation
		Transition.initFadeIn()

		// listen for page updates
		this.listen()

		// handle direct navigation to a page
		this.refresh()
	},

	initElements: function() {
		this.root = document.querySelector(this.rootClass)
		this.controller = document.querySelector(this.controllerClass)
		this.links = Array.from(this.controller.querySelectorAll("a"))
	},

	listen: function() {
		// listen for navigation clicks
		this.controller.addEventListener("click", this.navigate.bind(this))

		// listen for browser 'back' and 'forward' actions
		window.addEventListener("popstate", () => this.refresh())
	},

	navigate: function(e) {
		const { route: nextRoute } = e.target.dataset
		const currentRoute = this.getCurrentRoute()

		// if no route or we're already on this route, quit
		if (!nextRoute || nextRoute === currentRoute) return

		Transition.to(nextRoute, this.render.bind(this))
	},

	getCurrentRoute: function() {
		const { hash } = window.location
		return hash ? hash.substr(1, hash.length) : "home"
	},

	refresh: function() {
		const currentRoute = this.getCurrentRoute()
		Transition.to(currentRoute, this.render.bind(this))
	},

	isNotFound: function(route) {
		return !templates[route] && route.length > 0
	},

	getContentForRoute: function(route) {
		if (this.isNotFound(route)) return templates[`notfound`]
		return templates[route] || false
	},

	render: function(route) {
		const nextContent = this.getContentForRoute(route)
		if (!nextContent)
			throw new Error("Error finding content for the next route.")

		this.setActiveLink(route)

		if (nextContent) this.root.innerHTML = nextContent
	},

	setActiveLink: function(route) {
		this.links.forEach((link) => (link.dataset.active = "false"))
		const activeLink = this.links.find((link) => link.dataset.route === route)
		if (activeLink) activeLink.dataset.active = "true"
	},
}

export default Router
