import anime from "animejs"

const Transition = {

	rootClass: `#content-root`,

    to: function(route, renderFn) {
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
                    // this.render(route)
                    renderFn(route)
				},
			})
			.add(showOptions)
	}
}

export default Transition