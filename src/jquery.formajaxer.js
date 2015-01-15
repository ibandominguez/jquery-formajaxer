/* ===========================================================
* jquery.formajaxer.js
* http://ibandominguez.com
* ===========================================================
* Copyright 2014 Ibán Domínguez, Spain.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* ========================================================== */

(function ( $ ) {

  $.fn.formajaxer = function( config ) {
    // store $(this)
    var $this = $(this);

    // send ajax req
    $this.submit(function(e){
      // helper vars
      var $form = $(this);
      var formData = $form.serialize();

      // define defaults opts
      var opts = {
        action: $form.attr("action"),
        method: $form.attr("method"),
        success: function () {},
        error: function () {}
      };

      // extend config
      $.extend( opts, config );

      // make ajax call
      $.ajax({
        url: opts.action,
        type: opts.method,
        data: formData,
        success: function(data){
          if ( typeof opts.success === "function" ) opts.success(data, $form);
        },
        error: function(){
          if ( typeof opts.error === "function" ) opts.error();
        }
      });

      // prevent default behaviour
      e.preventDefault();
    });

    // return this for method chaining
    return this;
  };

} ( jQuery ) );
