$(window).scroll(function () {
    let i = $(".ppc-text-1").offset().top;
    if ($(this).scrollTop() > i) {
        $("header.top").css("visibility", "hidden");
        $("header.bottom").css("visibility", "visible");
    } else {
        $("header.top").css("visibility", "visible");
        $("header.bottom").css("visibility", "hidden");
    }
});