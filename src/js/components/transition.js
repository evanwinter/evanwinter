import anime from "animejs"

const Transition = {
	rootClass: `#root`,

	to: function(route, renderFn) {
		// default transition options
		const defaults = {
			easing: `easeInOutQuad`,
			duration: 300,
		}

		// define `hide` animation
		const hideOptions = {
			targets: this.rootClass,
			translateY: `1rem`,
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
					// this.render(route)
					renderFn(route)
				},
			})
			.add(showOptions)
	},

	initFadeIn: function() {
		anime({
			targets: ".anim.ease-in",
			opacity: 1,
			duration: 5000,
			delay: 750,
			// delay: anime.stagger(500)
			// translateY: 0,
		})
	},
}

export default Transition
