$(".anchor").click(function(e){
	var scrollTarget = this.id;
	var scrollTarget = "."+scrollTarget+"-section";
	$("html, body").animate({ scrollTop: $(scrollTarget).offset().top-69 }, "slow");
})

