jQuery(document).ready(function(){
    
    jQuery(".scroll-to-top").click(function(){
        jQuery("html").animate({"scrollTop": "0"}, 1000)
        return false
    });

    jQuery(window).scroll(function(){
        var utd = jQuery(window).scrollTop();
        if (utd > 500){
            jQuery(".scroll-to-top").fadeIn();
        }
        else {
            jQuery(".scroll-to-top").fadeOut("style");
        }
    })

    jQuery(window).scroll(function(){
        var utd = jQuery(window).scrollTop();
        if (utd > 500){
            jQuery(".main-menu").addClass("fixed");
        }
        else {
            jQuery(".main-menu").removeClass("fixed");
        }
    })



});