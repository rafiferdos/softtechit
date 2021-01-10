jQuery(document).ready(function () {
    jQuery("form").submit(function () { 
        var textValue = jQuery("input[type='text']").val();
        jQuery("this").after("<p>+textValue+</p>");
    });
    jQuery("form").submit(function(){
        var firstValue = jQuery(".number1").val();
        var secondValue = jQuery(".number2").val();
        var totalValue = parseInt(firstValue) + parseInt(secondValue);
        alert(totalValue);
    })
});