(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('keyboard', {
    // This will run before each test in this module.
    setup: function() {
      this.input = $('input.keyboard');
    }
  });

  test('rendered', function() {
    expect(1);
    ok($('#keyboard').children().length > 0, 'keyboard rendered');
  });

  test('input is empty on load', function() {
    expect(1);
    equal(this.input.val().length, 0, 'input empty');
  });

  test('keypress', function() {
    expect(3);    
    $('#keyboard').find('.key').eq(0).click();    
    equal(this.input.val().length, 1, 'letter written');
    $('#keyboard').find('.key').eq(1).click(); 
    equal(this.input.val().length, 2, 'two letters written');
    $('#keyboard').find('.key').eq(2).click(); 
    equal(this.input.val().length, 3, 'three letters written');
  });

  test('backspace', function(){
    expect(2);
    this.input.val('');
    $('#keyboard').find('.key').eq(0).click();    
    equal(this.input.val().length, 1, 'letter written');
    $('#keyboard').find('.key[data-action="backspace"]').eq(0).click();    
    equal(this.input.val().length, 0, 'letter removed');
  });

  test('clear', function(){
    expect(2);
    this.input.val('');
    $('#keyboard').find('.key').eq(0).click();    
    $('#keyboard').find('.key').eq(1).click();    
    equal(this.input.val().length, 2, 'letters written');
    $('#keyboard').find('.key[data-action="clear"]').eq(0).click();    
    equal(this.input.val().length, 0, 'both letters removed');
  });


}(jQuery));
