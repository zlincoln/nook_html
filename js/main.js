$('.navbar-toggle').on('click', function () {
    $(this).toggleClass('collapsed');
});

$('.carousel').on('slide.bs.carousel', function (e) {
    var nextH = $(e.relatedTarget).height();
    $(this).find('.active.item').parent().animate({
        height: nextH
    }, 500);
});