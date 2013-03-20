# Backbone Keyboard

A basic on-screen HTML5 / JS keyboard for kiosk style devices

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/edwin/backbone-keyboard/master/dist/backbone-keyboard.min.js
[max]: https://raw.github.com/edwin/backbone-keyboard/master/dist/backbone-keyboard.js

In your web page:

```html
  <input type='text' class='keyboard' />
  <div id='keyboard'></div>
  <script>
    var kb = new Backbone.View.Keyboard({
      "el" : '#keyboard'
    });
  </script>
```

## Documentation
```javascript
  options : {
    //the keyboard layout
    keys : [
      //3 rows of alpha keys
      ['q','w','e','r','t','y','u','i','o','p'],
      ['a','s','d','f','g', 'h','j','k','l'],
      ['z','x','c','v','b','n','m'],
      //one row of special keys with value modifier functions
      [
        { 
          id : 'clear',
          label : 'clear',
          action : function() {return '';}
        },
        {
          id : 'space',
          label : 'space',
          action : function(str) {return str += " ";}
        },
        { 
          id : 'backspace',
          label : 'del',
          action : function(str) {return str.slice(0,-1);}
        }
      ]
    ],
    //the target input element 
    targetSelector : 'input.keyboard'
  }
```

## Examples
_(Coming soon)_

## Release History
0.1.0 - First release, basic keyboard and special keys. 
