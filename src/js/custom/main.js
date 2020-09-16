// Your main script
const index = 'This is a placeholder!';
const halloe = 'This is a placeholder!';



$(document).ready(function () {
    //-----------------------Accordions-------------------------------------------

    $(".item-menu").on("click", ".item-menu-title", function () {
        $(this).toggleClass("active").next().slideToggle();
    });


    //------------------------------------------------------------------------------
    function isSameResource(urlOne, urlTwo) {
        var fragmentPattern = /#.*$/;
        var resourceOne = urlOne.replace(fragmentPattern, '');
        var resourceTwo = urlTwo.replace(fragmentPattern, '');
        return resourceOne === resourceTwo;
    }

    function getFragmentTarget(id) {
        if (id.slice(0, 1) === '#') {
            id = id.slice(1);
        }
        return document.getElementById(id) || document.querySelector('a[name="' + id + '"]');
    }


    $(".btn-nav").on("click", function (e) {
        e.preventDefault();
        $('.menu-header-mobile').toggleClass('active');
        $('.toggle-right li').toggleClass('show-right');
    });

    $(".btn-nav").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(this).hasClass("is-active")) {
            $(".btn-nav").removeClass("is-active");
        } else {

            $(".btn-nav").removeClass("is-active");
            $(this).addClass("is-active");
        }

    });
    $('.btn-nav').click(function () {
        if ($('html').hasClass('overflow')) {
            $('html').removeClass('overflow');
        } else if (!$('html').hasClass('overflow')) {
            $('html').addClass('overflow');
        }
    });

    $(document.body).on('click', 'a[href*="#"]:not([href="#"])', function (event) {
        $('html').removeClass('overflow');
        $(".btn-nav").removeClass("is-active");
        $('.menu-header-mobile').removeClass('active');
        if (event.isDefaultPrevented()) {
            return;
        }
        if (!isSameResource(location.href, this.href)) {
            return;
        }
        var target = getFragmentTarget(this.hash);
        if (!target) {
            return;
        }
        event.preventDefault();
        sttopOut = $(target).offset().top;
        $('html, body').animate({
                scrollTop: sttopOut
            },
            800,
            function () {
                window.location.hash = target.id || target.name;
            }
        );
    });
});