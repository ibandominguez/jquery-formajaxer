/*! jquery-formajaxer - v0.1.1 - 2015-04-26
* Copyright (c) 2015 Ibán Domínguez; Licensed MIT */
(function ($) {

  $.fn.formajaxer = function (config) {

    // return this collection
    return this.each(function (i, item) {

      // capture reusable data
      var $form = $(item), formData = $form.serialize();

      var opts = {
        action: $form.attr("action"),
        method: $form.attr("method")
      };

      // extend config
      $.extend(opts, config);

      // submit event
      $form.submit(function (e) {
        // ajax call
        $.ajax({
          url: opts.action,
          type: opts.method,
          data: formData,
          beforeSend: function () {
            if (typeof opts.beforeSend === "function") { opts.beforeSend.apply($form); }
          },
          complete: function () {
            if (typeof opts.complete === "function") { opts.complete.apply($form); }
          },
          success: function (data) {
            if (typeof opts.success === "function") { opts.success.apply($form, [data]); }
          },
          error: function () {
            if (typeof opts.error === "function") { opts.error.apply($form); }
          }
        });

        // prevent default behaviour
        e.preventDefault();
      });

    });
  };

}(jQuery));
