if ($('.member-login, .corporate-wellness, .event-consultancy').hasClass('.member-login, .corporate-wellness, .event-consultancy')) {
    $(this).addClass('opacity');
} else {
    $(this).removeClass('opacity');
}

$(document).ready(function () {
    $(".member-login, .corporate-wellness, .event-consultancy").hover(function () {
        $(this).toggleClass("overlay");
    });
});