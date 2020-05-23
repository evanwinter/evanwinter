import pdf from "../../assets/documents/WinterEvanResume.pdf"

export const about = `
	<div id="content-type-root" class="about-content grid two">
		<div>
			<p>
				I'm currently a developer for Brookfield Properties, a real estate services company.
			</p>
			<p>
				I graduated from the University of Wisconsin-Madison in 2018, where I studied
				computer science and strategic communication.
			</p>
			<p>
				I'm an avid learner and like to keep up with the latest tech.
				Some things I'm exploring in my free time include data visualization,
				progressive web apps, design systems, and natural language processing.
			</p>
		</div>
	</div>
`

export const work = `
	<div id="content-type-root" class="work-content">
		<div class="grid auto">
			<div class="work-item" id="project-1">
				<div class="work-item-background"></div>
				<div class="work-item-content">
					<div class="content-container">
						<div class="work-item-info">
							<h3 class="title">Visually</h3>
							<p class="description">Data visualization and analysis of song lyrics.</p>
						</div>
						<div class="technologies">
							<code>react, redux, scss</code>
						</div>
					</div>
				</div>
			</div>
			<div class="work-item" id="project-2">
				<div class="work-item-background"></div>
				<div class="work-item-content">
					<div class="content-container">
						<div class="work-item-info">
							<h3 class="title">emilybuchberger.design</h3>
							<p class="description">A portfolio site built for, and designed by, designer Emily Buchberger.</p>
						</div>
						<div class="technologies">
							<code>gatsby, react, redux, scss</code>
						</div>
					</div>
				</div>
			</div>
			<div class="work-item" id="project-3">
				<div class="work-item-background"></div>
				<div class="work-item-content">
					<div class="content-container">
						<div class="work-item-info">
							<h3 class="title">Typetest</h3>
							<p class="description">A simple web application for testing your typing speed.</p>
						</div>
						<div class="technologies">
							<code>javascript, html, scss</code>
						</div>
					</div>
				</div>
			</div>
			<div class="work-item" id="project-4">
				<div class="work-item-background"></div>
				<div class="work-item-content">
					<div class="content-container">
						<div class="work-item-info">
							<h3 class="title">Visually</h3>
							<p class="description">Data visualization and analysis of song lyrics.</p>
						</div>
						<div class="technologies">
							<code>react, redux, scss</code>
						</div>
					</div>
				</div>
			</div>
			<div class="work-item" id="project-5">
				<div class="work-item-background"></div>
				<div class="work-item-content">
					<div class="content-container">
						<div class="work-item-info">
							<h3 class="title">Visually</h3>
							<p class="description">Data visualization and analysis of song lyrics.</p>
						</div>
						<div class="technologies">
							<code>react, redux, scss</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
`

export const contact = `
	<div id="content-type-root" class="contact-content copy-width">
		<p>
			If you'd like to get in touch, please reach out to me on
			<a href="https://linkedin.com/in/evan-andrew-winter" target="_blank"
				rel="noopener noreferrer">LinkedIn</a>
			or send me an email at <a href="mailto:evan@evanwinter.me" target="_blank">evan@evanwinter.me</a>.
		</p>
		<p>
			You can download a copy of my professional resume <a href="${pdf}" target="_blank" rel="noopener noreferrer">here</a>.
		</p>
	</div>
`

export const notfound = `
	<div id="content-type-root" class="404-content">
		Sorry, there's nothing here.
	</div>
`

export const home = `
	<div id="content-type-root" class="home-content">
	</div>
`
