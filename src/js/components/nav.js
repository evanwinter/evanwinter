const Nav = {
	init: function () {
		window.addEventListener("DOMContentLoaded", () => {
			const THROTTLE_DELAY = 500

			let previousScrollPosition = 0
			let currentScrollPosition = 0
			let ready = true

			window.addEventListener("scroll", () => {
				if (ready) {
					ready = false
					setTimeout(() => {
						currentScrollPosition = window.scrollY

            const isScrollDown = currentScrollPosition > previousScrollPosition

            

						previousScrollPosition = currentScrollPosition
						ready = true
					}, THROTTLE_DELAY)
				}
			})
		})
	},
}

export default Nav