/* $("button").on("click", function(){
    $("div").fadeToggle(500);
        //, function(){
        // console.log("Fade finished");
        //$(this).remove();

    //});
    //$("div").remove();
}); */

$("button").on("click", function(){
    $("div").slideToggle(1000, function(){
        //console.log("slide is done!");
        $(this).remove();
    });
});