jQuery(document).ready(function () {
    var abc = jQuery(".vut").text();

jQuery(".petni").html("<h3>"+abc+"</h3>");
jQuery(".petni").css('color', 'red');




jQuery(".remove1").click(
    function () {
        jQuery(".vut").toggle();
    }
);

jQuery(".fadeIn1").click(
    function () {
        jQuery(".fadeIn").fadeToggle(500);
    }
);

jQuery(".slide1").click(
    function () {
        jQuery(".box-slide").slideToggle(500);
    }
);

jQuery(".animate1").click(
    function () { 
        jQuery(".box-slide").animate({'width':'100', 'height':'456'},1000).animate({'width':'700', 'height':'788'},1000).animate({'width':'1000', 'height':'200'},1000).animate({'width':'300', 'height':'578'},1000).animate({'width':'56', 'height':'960'},1000).animate({'width':'500', 'height':'600'},1000).animate({'top':'100', 'left':'200'},3000).animate({'top':'170', 'left':'800'},1000).animate({'top':'100', 'left':'200'},1000).animate({'top':'700', 'left':'500'},1000).animate({'top':'50', 'left':'50'},300).animate({'top':'200', 'left':'560'},300).animate({'top':'1200', 'left':'500'},300);
    }    
);

jQuery(".stop1").click(
    function () {
        jQuery(".box-slide").stop();
    }
);

jQuery(".ans").click(
    function () {
        jQuery("h1").append("<p>the ans is 3 bro </p>");
    }
);

jQuery(".example1").find(".example4").css('color', 'red');

jQuery("h2").nextAll(".red").css('color', 'red');

jQuery(".else .red").last().css('color','red');

})