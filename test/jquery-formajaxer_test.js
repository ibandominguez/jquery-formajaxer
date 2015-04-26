(function ($) {
  module('jQuery#formajaxer', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  /**
  * test is chainabled
  * @test
  */
  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.formajaxer(), this.elems, 'should be chainable');
  });

  /**
  * test error callback
  * @test
  */
  test('test error callback', function () {
    var $forms;

    $forms = this.elems.formajaxer({
      action: "nowhere",
      error: function () {
        ok(true);
        start();
      }
    });

    $forms.first().trigger('submit');
    stop();
  });

  /**
  * test success callback
  * @test
  */
  test('test success callback', function () {
    var $forms;

    $forms = this.elems.formajaxer({
      success: function (data) {
        var title = $(data).filter('title').text();
        equal(title, 'jquery-formajaxer Test Suite');
        start();
      }
    });

    $forms.first().trigger('submit');
    stop();
  });

  /**
  * test success callback contains form jquery elem ref
  * @test
  */
  test('test success callback', function () {
    var $forms;

    $forms = this.elems.formajaxer({
      success: function (data) {
        var $formRef = this;
        ok(data);
        ok($formRef.jquery);
        start();
      }
    });

    $forms.first().trigger('submit');
    stop();
  });

}(jQuery));
