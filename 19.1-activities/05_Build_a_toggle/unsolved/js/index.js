// Add Event Listener Below
$("#toogle").on("click", function(){
    $("#dropDown").slideToggle();
    $("img").css("transform", "rotate:180deg");
});