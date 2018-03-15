$(document).ready(function(){
    new WOW().init();
    $(".companyname").hide();
    $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                $(".companyname").show();
            }
            else if($(this).prop("checked") == false){
                $(".companyname").hide();
            }
    });
});
