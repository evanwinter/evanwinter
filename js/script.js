$(".anchor").click(function(e){
	var scrollTarget = this.id;
	var scrollTarget = "."+scrollTarget+"-section";
	$("html, body").animate({ scrollTop: $(scrollTarget).offset().top-59 }, "slow");
});

// $(".code-project").click(function(e){
// 	console.log("click");
// 	$(this).children('div').children('div').next('.project-section-body').slideToggle('fast');
// });