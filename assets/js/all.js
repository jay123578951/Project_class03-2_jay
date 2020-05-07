// 漢堡
function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// QA下拉
$(document).ready(function(){
    $(".accordion-title").click(function(e){
        var accordionitem = $(this).attr("data-tab");
        $("#"+accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

        $(this).toggleClass("active-title");
        $("#"+accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");

        $(".fa-chevron-down",this).toggleClass("chevron-top");
        $("#"+accordionitem).parent().siblings().find(".accordion-title .fa-chevron-down").removeClass("chevron-top");
    });
    document.getElementById("defaultOpen").click();
});