$(function () {
    $(".rankingList>.sub>li>a").click(function () {
        $(".all").removeClass("all");
        $(".other").removeClass("other");
        $(this).addClass("other");
    });
})

