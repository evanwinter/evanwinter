<!DOCTYPE html>
<html>
<head>
	<title> Evan Winter </title>
	<script src="https://use.typekit.net/egg3bww.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" charset="utf-8">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<!-- JQUERY -->
	<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
	<!-- FONTAWESOME -->
	<script src="https://use.fontawesome.com/ce2534f76f.js"></script>
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="css/styles.css"> 
</head>
<body>
<section class="header-section">
	<?php include_once("data/analytics.php"); ?>
	<?php include("navbar.html"); ?>
	<div id="canvas-container">
		<canvas id="myCanvas" class="myCanvas" onmousemove="getPosHover(event)" onclick="getPosClick(event)" width="1048px" height="400px"></canvas>
	</div>
	<div class="mobile-splash">
		<div>
			<a class="anchor" id="about" href="#">
				Welcome.<br><span>Click to enter.</span><br><i class="fa fa-angle-down" aria-hidden="true"></i>
			</a>			
		</div>
	</div>
</section>
<section class="about-section">
	<div class="section-wrap about-content">
		<div class="profile">
			<div class="profile-section profile-image-wrap">
				<img class="profile-image" alt="evan-winter-headshot" src="images/headshot-small.png">
			</div>
			<div class="profile-section profile-main">
				<div class="profile-header">
					<h1 class="head"> evan winter </h1>
					<h2 class="subhead"> web developer </h2>
				</div>
				<div class="profile-grid">
					<div class="profile-grid-left">location</div>
					<div class="profile-grid-right">Madison, Wisconsin</div>
					<div class="profile-grid-left">hometown</div>
					<div class="profile-grid-right">Minneapolis, Minnesota</div>
					<div class="profile-grid-left">education</div>
					<div class="profile-grid-right">In May 2018 I'll graduate from the University of Wisconsin-Madison, where I'm currently a senior studying Journalism, Computer Science and Digital Media Studies.</div>
					<div class="profile-grid-left">technical skills</div>
					<div class="profile-grid-right">javascript, html, css, angular 4, python, java, groovy, jquery, php, bootstrap, rails, node.js, git, JIRA</div>
					<div class="profile-grid-left">areas of study</div>
					<div class="profile-grid-right">computer programming, web design, human-computer interaction, software engineering, journalism, mass communication theory, fact-checking, news reporting, marketing, advertising, public relations, graphic design, critical internet studies, artificial intelligence</div>
				</div>
				<div class="profile-info-footer"></div>
			</div>
		</div>
	</div>
</section>
<section class="portfolio-section">
	<div class="section-wrap portfolio-content">	
		<div class="projects">
			<div class="grid">
				<div class="card code-project">
					<div class="project-section project-section-one">
						<img class="code-project-image" src="images/genius-scrape.png">
					</div>
					<div class="project-section project-section-two">
						<h1 class="head">genius lyrics</h1>
						<span class="technologies"> Python </span>
						<ul class="specs">
						    <li> Collect and analyze song lyrics using the Genius API. </li>
						</ul>
						<div class="links">
							<span class="source-link">
								<a href="https://github.com/evanwinter/genius-scrape" target="_blank">Source Code</a>
							</span>
						</div>
					</div>
				</div>
				<div class="card code-project">
					<div class="project-section project-section-one">
						<img class="code-project-image" src="images/genius-scrape.png">
					</div>
					<div class="project-section project-section-two">
						<h1 class="head">twitter sentiment analysis</h1>
						<span class="technologies"> Python </span>
						<ul class="specs">
						    <li> Analyze sentiment of tweets in real time. </li>
						</ul>
						<div class="links">
							<span class="source-link">
								<a href="https://github.com/evanwinter/twitter-sentiment-analysis" target="_blank">Source Code</a>
							</span>
						</div>
					</div>
				</div>
				<div class="card code-project">
					<div class="project-section project-section-one">
						<img class="code-project-image" src="images/wpm.png">
					</div>
					<div class="project-section project-section-two">
						<h1 class="head">typing test</h1>
						<h3 class="technologies alt-subheading"> HTML, Javascript, Bootstrap</h3>
						<ul class="specs">
						    <li> Simple 30-second typing test. </li>
						    <li> Tells you at how many words per minute you type and calculates your accuracy. </li>
						</ul>
						<div class="links">
							<span class="demo-link">
								<a href="http://typ.herokuapp.com" target="_blank">Demo</a>
							</span>
							<span class="source-link">
								<a href="https://github.com/evanwinter/wpm" target="_blank">Source Code</a>
							</span>
						</div>
					</div>
				</div>
				<div class="card code-project">
					<div class="project-section project-section-one">
						<img class="code-project-image" src="images/uw-research.png">
					</div>
					<div class="project-section project-section-two">
						<h1 class="head">uw-research</h1>
						<h3 class="technologies alt-subheading"> HTML, CSS, Javascript </h3>
						<ul class="specs">
						    <li> I built this website to host the content of a group journalism project. </li>
						</ul>
						<div class="links">
							<span class="demo-link">
								<a href="http://uw-research.herokuapp.com" target="_blank">Demo</a>
							</span>
							<span class="source-link">
								<a href="https://github.com/evanwinter/uw-research" target="_blank">Source Code</a>
							</span>
						</div>
					</div>
				</div>
				<div class="card code-project">
					<div class="project-section project-section-one">
						<img class="code-project-image" src="images/find-fake-news.png">
					</div>
					<div class="project-section project-section-two">
						<h1 class="head">fake news finder</h1>
						<h3 class="technologies alt-subheading"> Python </h3>
						<ul class="specs">
						    <li> Using the Twitter Streaming API, collect data on tweets linking to established fake news sites. </li>
						    <li> Identify 'hot topics' or particular stories being shared at a high rate. </li>
						    <li> Using Bing's Web Search API, get other articles related to the topic. </li>
						</ul>
						<div class="links">
							<span class="source-link">
								<a href="https://github.com/evanwinter/find-fake-news" target="_blank">Source Code</a>
							</span>
						</div>
					</div>
				</div>

				<div class="card code-project">
					<div class="project-section project-section-one">
						<img class="code-project-image" src="images/demos.png">
					</div>
					<div class="project-section project-section-two">
						<h1 class="head"> demos </h1>
						<h3 class="technologies"> HTML, CSS, javascript </h3>
						<ul class="specs">
							<li> A repository where I dump any demos / prototypes I've been playing around with lately. </li>
						</ul>
						<div class="links">
							<span class="demo-link">
								<a href="http://eaw-demos.herokuapp.com" target="_blank">Demo</a>
							</span>
							<span class="source-link">
								<a href="https://github.com/evanwinter/eaw-demos" target="_blank">Source Code</a>
							</span>
						</div>
					</div>
				</div>

				<div class="card code-project">
					<div class="project-section project-section-one">
						<img class="code-project-image" src="images/p-calc.png">
					</div>
					<div class="project-section project-section-two">
						<h1 class="head">pcalc</h1>
						<h3 class="technologies"> Javascript, HTML, CSS </h3>
						<ul class="specs">
							<li> A kinematics calculator with auto-complete capabilities. </li>
						</ul>
						<div class="links">
							<span class="demo-link">
								<a href="http://p-calc.herokuapp.com" target="_blank">Demo</a>
							</span>
							<span class="source-link">
								<a href="https://github.com/evanwinter/p-calc" target="_blank">Source Code</a>
							</span>
						</div>
					</div>
				</div>

				<div class="card code-project">
					<div class="project-section project-section-one">
						<img class="code-project-image" src="images/favorite-tweets.png">
					</div>
					<div class="project-section project-section-two">
						<h1 class="head">twitter fave-bot</h1>
						<h3 class="technologies alt-subheading"> javascript </h3>
						<ul class="specs">
						    <li> A simple Twitter bot that bulk favorites tweets containing a specified keyword or phrase. </li>
						</ul>
						<div class="links">
							<span class="source-link">
								<a href="https://github.com/evanwinter/find-fake-news" target="_blank">Source Code</a>
							</span>
						</div>
					</div>
				</div><div class="card code-project">
					<div class="project-section project-section-one">
						<img class="code-project-image" src="images/personal-site.png">
					</div>
					<div class="project-section project-section-two">
						<h1 class="head">this website</h1>
						<span class="technologies"> HTML, CSS, Javascript </span>
						<ul class="specs">
						    <li> I built this site from scratch to serve as my personal website and as a way to showcase my web development and design skills. </li>
						</ul>
						<div class="links">
							<span class="source-link">
								<a href="https://github.com/evanwinter/evanwinter" target="_blank">Source Code</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="contact-section">
	<div class="section-wrap contact-content">
		<a class="card contact-item-wrap" href="mailto:evan@evanwinter.me">
			<div class="contact-item">
				email <i class="fa fa-external-link" aria-hidden="true"></i>
			</div>
		</a>
		<a class="card contact-item-wrap" target="_blank" href="https://github.com/evanwinter">
			<div class="contact-item">
				github <i class="fa fa-external-link" aria-hidden="true"></i>
			</div>
		</a>
		<a class="card contact-item-wrap" target="_blank" href="https://twitter.com/evanwinter_">
			<div class="contact-item">
				twitter <i class="fa fa-external-link" aria-hidden="true"></i>
			</div>
		</a>
		<a class="card contact-item-wrap" target="_blank" href="https://www.linkedin.com/in/evan-andrew-winter/">
			<div class="contact-item">
				linkedin <i class="fa fa-external-link" aria-hidden="true"></i>
			</div>
		</a>
	</div>
</section>
<footer>
	<div>Evan Winter | 2017</div>
</footer>
</body>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="js/canvas.js"></script>
</html>