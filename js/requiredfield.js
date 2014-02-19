(function ($) {

    $.fn.requiredfield = function (options) {

        // Default options.
        var settings = $.extend({
            // These are the defaults.
            borderColor: "red",
            backgroundColor: "#FFCECE",
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
                $(this).css({
                    borderColor: settings.borderColor,
                    backgroundColor: settings.backgroundColor
                });
                $(settings.errorField).html(settings.errorText).css(
                    'color', settings.errorColor);
                // Flip flag when not filled
                allFilled = false;
            }
            // Field will be normal if filled out
            else {
                $(this).css({
                    borderColor: "",
                    backgroundColor: ""
                });


            }
            // Remove error text when all fields are filled
            if (allFilled === true) {
                $(settings.errorField).html("");
            }
        });
    };

}(jQuery));