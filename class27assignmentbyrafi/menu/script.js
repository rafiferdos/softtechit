jQuery(document).ready(function(){
    jQuery(".main-menu .bar").click(function(){
        jQuery(".main-menu ul").slideToggle();
    });
    jQuery(window).resize(function(){
        var screenWidth = jQuery(window).width();
        if (screenWidth > 768) {
            jQuery(".main-menu ul").removeAttr("style");
        }
        else {
            jQuery(".main-menu ul").hide();
        }
    });
    jQuery(".main-menu ul li").hover(
        function () {
            jQuery(this).children("ul").slideToggle(300, "easeOutBounce");
        }
    );
    jQuery(".main-menu ul ul").parent("li").children("a").append(' <i class="fa fa-sort-down">');
})