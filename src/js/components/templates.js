import pdf from "../../assets/documents/WinterEvanResume.pdf"

export const about = `
  <div class="about-content">
		<div>
			<p>
				I'm currently a full-stack developer at Brookfield Properties.
				We're a small team supporting websites, APIs, wifi portals, interactive directories and more.
			</p>
			<p>
				I'm primarily interested in front-end development, but I'm always open to picking up more back-end.
			</p>
		</div>
		<div>
			<p>
				I'm an avid learner and like to keep up with the latest tech.
				Some things I'm exploring in my free time include data visualization,
				progressive web apps, design systems, and natural language processing.
			</p>
			<p>
				A few technologies I've been working with recently include:
			</p>
			<div class="flex min-content">
				<div>
					<ul>
						<li>JavaScript (ES6+)</li>
						<li>React</li>
						<li>GraphQL</li>
						<li>Progressive web apps</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>HTML & (S)CSS</li>
						<li>Wagtail</li>
						<li>Adobe AEM</li>
						<li>Magento 2</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
`

// export const work = `
// 	<div class="work-content">
// 		<div class="grid auto">
// 			<div class="work-item" id="project-1">
// 				<div class="work-item-background"></div>
// 				<div class="work-item-content">
// 					<div class="content-container">
// 						<div class="work-item-info">
// 							<h3 class="title">Visually</h3>
// 							<p class="description">Data visualization and analysis of song lyrics.</p>
// 						</div>
// 						<div class="technologies">
// 							<code>react, redux, scss</code>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div class="work-item" id="project-2">
// 				<div class="work-item-background"></div>
// 				<div class="work-item-content">
// 					<div class="content-container">
// 						<div class="work-item-info">
// 							<h3 class="title">emilybuchberger.design</h3>
// 							<p class="description">A portfolio site built for, and designed by, designer Emily Buchberger.</p>
// 						</div>
// 						<div class="technologies">
// 							<code>gatsby, react, redux, scss</code>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div class="work-item" id="project-3">
// 				<div class="work-item-background"></div>
// 				<div class="work-item-content">
// 					<div class="content-container">
// 						<div class="work-item-info">
// 							<h3 class="title">Typetest</h3>
// 							<p class="description">A simple web application for testing your typing speed.</p>
// 						</div>
// 						<div class="technologies">
// 							<code>javascript, html, scss</code>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div class="work-item" id="project-4">
// 				<div class="work-item-background"></div>
// 				<div class="work-item-content">
// 					<div class="content-container">
// 						<div class="work-item-info">
// 							<h3 class="title">Visually</h3>
// 							<p class="description">Data visualization and analysis of song lyrics.</p>
// 						</div>
// 						<div class="technologies">
// 							<code>react, redux, scss</code>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div class="work-item" id="project-5">
// 				<div class="work-item-background"></div>
// 				<div class="work-item-content">
// 					<div class="content-container">
// 						<div class="work-item-info">
// 							<h3 class="title">Visually</h3>
// 							<p class="description">Data visualization and analysis of song lyrics.</p>
// 						</div>
// 						<div class="technologies">
// 							<code>react, redux, scss</code>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// `

export const contact = `
	<div class="contact-content copy-width">
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
	<div class="404-content">
		Sorry, there's nothing here.
	</div>
`

export const home = `
	<div class="home-content">
	</div>
`

export const timeline = `
	<div class="timeline-content">
		<div class="timeline-item">
			<div class="timeline-date">
				April 2020
			</div>
			<div class="timeline-desc">
				<h4>Joined Brookfield Properties</h4>
				<p>Lorem ipsum consequat adipisicing occaecat consectetur aute laborum est labore minim aliquip. Eiusmod quis non elit dolor ipsum ullamco commodo eiusmod cupidatat. Dolore mollit consequat quis esse officia proident elit fugiat mollit.</p>
			</div>
		</div>
		
		<div class="timeline-item">
			<div class="timeline-date">
				June 2018
			</div>
			<div class="timeline-desc">
				<h4>Joined Schafer Condon Carter</h4>
				<p>Lorem ipsum consequat adipisicing occaecat consectetur aute laborum est labore minim aliquip. Eiusmod quis non elit dolor ipsum ullamco commodo eiusmod cupidatat. Dolore mollit consequat quis esse officia proident elit fugiat mollit.</p>
			</div>
		</div>
		
		<div class="timeline-item">
			<div class="timeline-date">
				May 2018
			</div>
			<div class="timeline-desc">
				<h4>Graduated from University of Wisconsin-Madison</h4>
				<p>with a Bachelors of Arts in Reporting & Strategic Communication, and minors in Computer Science and Digital Studies.</p>
			</div>
		</div>
	</div>
`

export const projects = `
	<div class="projects-content">
		<div class="timeline">
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>April 2020</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Brookfield Properties as a Software Engineer</h3>
					<p>Supporting the retail properties owened and operated by Brookfield PropertiesJava, Maven, Sling, JavaScript, React, Redux, HTL, SCSS, Java SpringBoot</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>June 2018</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Schafer Condon Carter as a Developer & UX Intern</h3>
					<p>Responsibilities included</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>April 2020</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Brookfield Properties as a Software Engineer</h3>
					<p>Supporting the retail properties owened and operated by Brookfield PropertiesJava, Maven, Sling, JavaScript, React, Redux, HTL, SCSS, Java SpringBoot</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>June 2018</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Schafer Condon Carter as a Developer & UX Intern</h3>
					<p>Responsibilities included</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>April 2020</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Brookfield Properties as a Software Engineer</h3>
					<p>Supporting the retail properties owened and operated by Brookfield PropertiesJava, Maven, Sling, JavaScript, React, Redux, HTL, SCSS, Java SpringBoot</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>June 2018</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Schafer Condon Carter as a Developer & UX Intern</h3>
					<p>Responsibilities included</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>April 2020</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Brookfield Properties as a Software Engineer</h3>
					<p>Supporting the retail properties owened and operated by Brookfield PropertiesJava, Maven, Sling, JavaScript, React, Redux, HTL, SCSS, Java SpringBoot</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>June 2018</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Schafer Condon Carter as a Developer & UX Intern</h3>
					<p>Responsibilities included</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>April 2020</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Brookfield Properties as a Software Engineer</h3>
					<p>Supporting the retail properties owened and operated by Brookfield PropertiesJava, Maven, Sling, JavaScript, React, Redux, HTL, SCSS, Java SpringBoot</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>June 2018</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Schafer Condon Carter as a Developer & UX Intern</h3>
					<p>Responsibilities included</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>April 2020</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Brookfield Properties as a Software Engineer</h3>
					<p>Supporting the retail properties owened and operated by Brookfield PropertiesJava, Maven, Sling, JavaScript, React, Redux, HTL, SCSS, Java SpringBoot</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-key">
					<!--/* date, callout */-->
					<p>June 2018</p>
				</div>
				<div class="timeline-value">
					<h3>Joined Schafer Condon Carter as a Developer & UX Intern</h3>
					<p>Responsibilities included</p>
				</div>
			</div>
		</div>
	</div>
`


