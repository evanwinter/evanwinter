const Content = {
	init: function() {
		this.listen()
	},

	destroy: function() {
		const workItems = Array.from(document.querySelectorAll(".work-item"))
		workItems.forEach((item) =>
			item.removeEventListener("click", this.selectWorkItem)
		)
	},

	listen: function() {
		const workItems = Array.from(document.querySelectorAll(".work-item"))
		workItems.forEach((item) =>
			item.addEventListener("click", this.selectWorkItem)
		)
	},

	selectWorkItem: function(e) {
		const id = e.currentTarget.id
	},
}

export default Content
