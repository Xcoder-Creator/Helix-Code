   /* -----------------------------*/
/*  javascript for back to top button  */
   /* -----------------------------*/
        /* Made by Helix-Code */
		
jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 900);
});

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});