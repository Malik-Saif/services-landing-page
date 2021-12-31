$(document).ready(function () {
    $(".member-login, .corporate-wellness, .event-consultancy").hover(function () {
        $(this).toggleClass("overlay");
        $(".overlay").addClass("opacity");
        $(this).removeClass("opacity");
    });
});
$(document).ready(function () {
    $(".member-login, .corporate-wellness, .event-consultancy").click(function () {
        $(".member-login, .corporate-wellness, .event-consultancy").removeClass("active");
        $(this).addClass("active");
    });
});