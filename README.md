jquery-formajaxer
=============

jQuery formajaxer allows you send a form via get or post without having to
writte the ajax request yourself

.formajaxer( [config] )

config
Type: PlainObject
An object of containing 4 optional config:
- config: (object)
  default: {
    action: <will grap the action attr form if not specified>,
    method: <will grap the method attr form if not specified>,
    success: function(data){},
    error: function(){}
  }


Dependencies
=============

jQuery

Installation
=============

Simply clone this repo or if using bower copy and paste this on your terminal:

```

bower install jquery-formajaxer  

```

Important notes
=============

Keep in mind you might want to create a proper response from the
server side, in best scenario a json object with you could you
to perfom some actions upon success

Usage
=====

Have a look at /demo/index.html for a more detail explanation on how to use it.

```

// call formajaxer
$("form").formajaxer({
  success: function (data) {
    // do something with the data response
  },
  error: function () {
    alert("You have sent a request to the server but it has returned an error, you should try this demo on a web server");
  }
});

```
