$(function() {
    $(document).bind('keydown', 'ctrl+\\', function () {
        toggleHtmlClass('has-visible-vertical-rhythm-grid');
    });

    $(document).bind('keydown', 'ctrl+\'', function () {
        toggleHtmlClass('has-visible-vertical-rhythm-helpers');
    });

    $(document).bind('keydown', 'ctrl+;', function () {
        toggleHtmlClass('has-visible-horizontal-grid');
    });

    function toggleHtmlClass(className) {
        var activeClasses = JSON.parse(localStorage.getItem('activeClasses'));
        if (!activeClasses) {
            activeClasses = {}
        }
        $('html').toggleClass(className);
        activeClasses[className] = $('html').hasClass(className);
        localStorage.setItem('activeClasses', JSON.stringify(activeClasses));
    }

    var activeClasses = JSON.parse(localStorage.getItem('activeClasses'));
    $.each(activeClasses, function (className, value) {
        if (value) {
            $('html').addClass(className);
        }
    });

    $('.toggle-grid-visibility').on('click', function () {
        toggleHtmlClass('has-visible-vertical-rhythm-grid');
        return false;
    })
});