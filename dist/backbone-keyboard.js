/*! Backbone Keyboard - v0.1.0 - 2013-06-25
* https://github.com/edwin/backbone-keyboard
* Copyright (c) 2013 Edwin Webb; Licensed MIT */
Backbone.View.Keyboard = Backbone.View.extend({

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
  },

  //will be populated with options.targetSelector
  targ : undefined,
  //will be poulated with the actions from special keys
  actions : {},

  //click a key
  events : {
    'click .key' : 'clickHandler'
  },

  //merge options and auto-render
  initialize : function(opt) {

    //merge options
    this.options = _.extend(this.options, opt);

    //set target
    this.setTarget($(this.options.targetSelector));

    //write the HTML
    this.render();

  },

  //writes out the 2D array of keys to <div class='row'>
  render : function() {

    var html = [];

    _.forEach(this.options.keys, function(row){
      html.push('<div class="row">');
      _.forEach(row, function(key){
        if(_.isObject(key)) {
          html.push(this.makeSpecial(key));
        } else {
          html.push(this.makeKey(key));
        }
        
      },this);
      html.push('</div>');
    },this);

    this.$el.html(html.join(""));
  },

  //click on a .key
  clickHandler : function(e) {

    var targ = e.currentTarget;
    var val = this.targ.val() || "";

    //if special, look up the action and apply it to val
    if(targ.hasAttribute('data-action')) {
      this.targ.val(this.actions[targ.getAttribute('data-action')](val));
    } else {
      this.addChar(e.currentTarget.innerText);  
    }

    e.preventDefault();

  },

  //sets the keyboards target element
  //public
  setTarget : function(target) {
    var targ = target;

    if(targ.length === 0) {
      console.warn('no keyboard target found');
    }

    this.targ = targ;

    return targ;
  },

  //make a key and add an action
  makeSpecial : function(keyObj) {
    this.actions[keyObj.id] = keyObj.action;
    return '<span class="key" data-action="'+ keyObj.id +'">' + keyObj.label + '</span>';
  },

  //make a STRING key
  makeKey : function(code) {
    return '<span class="key">' + code + '</span>';
  },

  //handler for updating the input
  addChar : function(char) {
    this.targ.val(this.targ.val() + char);
  }

});