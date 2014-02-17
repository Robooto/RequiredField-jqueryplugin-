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

        // Checks if fields are filled out.
        return this.each(function () {

            // If field is empty turns red
            if ($(this).val().length == 0) {
                $(this).css({
                    borderColor: settings.borderColor,
                    backgroundColor: settings.backgroundColor
                });
                $(settings.errorField).html(settings.errorText).css(
                    'color', settings.errorColor);
            }
            // Field will be normal if filled out
            else {
                $(this).css({
                    borderColor: "",
                    backgroundColor: ""
                });


            }
            // Remove error text when all fields are filled
            if ($(this).val().length != 0) {
                $(settings.errorField).html("");
            }
        });
    };

}(jQuery));