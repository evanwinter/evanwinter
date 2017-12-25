$(".js-anchor").click(function(e){
	var scrollTarget = this.id;
	var scrollTarget = "."+scrollTarget+"-section";
	$("html, body").animate({ scrollTop: $(scrollTarget).offset().top-59 }, "slow");
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 1;
var navbarHeight = $('#nav-main').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('#nav-main').removeClass('nav-down').addClass('nav-up');
    } else if (st < lastScrollTop) {
        if(st + $(window).height() < $(document).height()) {
            $('#nav-main').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}