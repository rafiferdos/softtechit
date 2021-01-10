jQuery(document).ready(function(){
    
    jQuery("p").click(function(){
        jQuery(this).hide(function () {
            alert("bah parchen to click korte");
        });
    });
    
    jQuery(window).scroll(function(){
        var meter = jQuery(window).scrollTop();
        jQuery(".meter-box").text(meter);
    });

});