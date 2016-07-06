$(function() {
    $(document).bind('keydown', 'ctrl+\\', function () {
        toggleBodyClass('has-visible-vertical-rhythm-grid');
    });

    $(document).bind('keydown', 'ctrl+\'', function () {
        toggleBodyClass('has-visible-vertical-rhythm-helpers');
    });

    $(document).bind('keydown', 'ctrl+;', function () {
        toggleBodyClass('has-visible-horizontal-grid');
    });

    function toggleBodyClass(className) {
        var activeClasses = JSON.parse(localStorage.getItem('activeClasses'));
        if (!activeClasses) {
            activeClasses = {}
        }
        $('body').toggleClass(className);
        activeClasses[className] = $('body').hasClass(className);
        localStorage.setItem('activeClasses', JSON.stringify(activeClasses));
    }

    var activeClasses = JSON.parse(localStorage.getItem('activeClasses'));
    $.each(activeClasses, function (className, value) {
        if (value) {
            $('body').addClass(className);
        }
    });

    $('.toggle-grid-visibility').on('click', function () {
        toggleBodyClass('has-visible-vertical-rhythm-grid');
        return false;
    })
});