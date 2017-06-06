var sections = $('.row')
    , nav = $('#mynavbar')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height - $('.About').outerHeight(),
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});
$(function () {
    var navoffset = $("#mynavbar").offset().top;
    $('#mynavbar').wrap('<div class="nav-placeholder"></div>');
    $('.nav-placeholder').height($('#mynavbar').outerHeight());
    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        if (scrollpos >= navoffset) {
            $('#mynavbar').addClass("fixed");
        }
        else {
            $("#mynavbar").removeClass("fixed");
        }
    })
});
