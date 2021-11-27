(function($){
    $(function(){
        var window_width = $(window).width();
        function rgb2hex(rgb) {
            if (/^#[0-9A-F]{6}$/i.test(rgb)) { return rgb; }
            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }
        $('.dynamic-color .col').each(function () {
            $(this).children().each(function () {
                var color = $(this).css('background-color'),
                    classes = $(this).attr('class');
                $(this).html(rgb2hex(color) + " " + classes);
                if (classes.indexOf("darken") >= 0) {
                    $(this).css('color', 'rgba(255,255,255,.9');
                }
            });
        });
        if ($('nav').length) {
            $('.toc-wrapper').pushpin({ top: $('nav').height() });
        }
        else {
            $('.toc-wrapper').pushpin({ top: 0 });
        }
        var toggleFlowTextButton = $('#flow-toggle')
        toggleFlowTextButton.click( function(){
            $('#flow-text-demo').children('p').each(function(){
                $(this).toggleClass('flow-text');
            })
        });
        var toggleContainersButton = $('#container-toggle-button');
        toggleContainersButton.click(function(){
            $('body .browser-window .container, .had-container').each(function(){
                $(this).toggleClass('had-container');
                $(this).toggleClass('container');
                if ($(this).hasClass('container')) {
                    toggleContainersButton.text("Turn off Containers");
                }
                else {
                    toggleContainersButton.text("Turn on Containers");
                }
            });
        });
        function is_touch_device() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }
        if (is_touch_device()) {
            $('#nav-mobile').css({ overflow: 'auto'})
        }

        $('.button-collapse').sideNav({'edge': 'left'});
    });
})(jQuery);
$(document).ready(function() {
    $('select').material_select('destroy');
});

$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

