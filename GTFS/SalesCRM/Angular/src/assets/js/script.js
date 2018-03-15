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
    $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).removeClass("btn-default").addClass("btn-primary");   
    });
});
