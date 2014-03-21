(function ($) {

    $.fn.requiredfield = function (options) {

        // Default options.
        var settings = $.extend({
            // These are the defaults.
            errorClass: "ui-state-error",
            errorText: "Please complete the required fields",
            errorField: "#errorText",
            errorColor: "red"
        }, options);
        // All filled out flag
        var allFilled = true;
        // Checks if fields are filled out.
        return this.each(function () {

            // If field is empty turns red
            if ($(this).val().length === 0 && $(this).is(":visible")) {
                $(this).addClass(settings.errorClass);
                $(settings.errorField).html(settings.errorText).css(
                    'color', settings.errorColor);
                // Flip flag when not filled
                allFilled = false;
            }
            // Field will be normal if filled out
            else {
                $(this).removeClass(settings.errorClass);


            }
            // Remove error text when all fields are filled
            if (allFilled === true) {
                $(settings.errorField).html("");
            }
        });
    };

}(jQuery));