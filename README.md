# jquery-formajaxer

> jQuery formajaxer allows you send a form via get or post without having to write the ajax request yourself.
> This plugin in just a wrapper around $.ajax which main goal is to allow developers to setup a multiuse ajax
> request controlled by the form html default attrs

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/ibandominguez/jquery-jquery-formajaxer/master/dist/jquery.jquery-formajaxer.min.js
[max]: https://raw.githubusercontent.com/ibandominguez/jquery-jquery-formajaxer/master/dist/jquery.jquery-formajaxer.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-formajaxer.min.js"></script>
<script>

  (function() {
    "use strict";

    /**
    * used without options
    */
    // this form will submit to the action attr using the
    // attr method specified
    $("form").formajaxer();

    /**
    * used with options
    */
    $("form").formajaxer({
      beforeSend: function () { console.log('before'); },
      complete: function () { console.log('after'); },
      success: function (data) {
        // the form is bind to this func
        // so you have access to jquery magic here
        // this.slideToggle() ...
        alert(data);
        this.slideToggle();
      },
      error: function () {
        alert("Error");
      }
    });

  }());

</script>
```

## License

MIT © Ibán Domínguez
