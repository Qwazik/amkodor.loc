jQuery(function($){

  $('input[placeholder], textarea[placeholder]').placeholder();
  $(".mask-phone").mask("+7 (999) 999-99-99");


  // link-new-tab
  $('a[rel=external]').attr('target','_blank');

//form elements
jcf.setOptions('File', {
  buttonText: ' ',
  placeholderText: ' '
});


jcf.replaceAll();


  var clip = new Clipboard('.btn-copy');



  // add-open-class
  $('.burger-menu').click(function(){
   if($(this).parent().is('.menu-burger--opened')){
     $(this).parent().removeClass('menu-burger--opened');
     $('body').removeClass('menu-open-wrapper-page');
   }else{
     $(this).parent().addClass('menu-burger--opened');
     $('body').addClass('menu-open-wrapper-page');
   }
  });


  $('.menu-item__link--dd-open').click(function(){
   if($(this).parent().is('.menu-item--dd-opened')){
    $(this).parent().removeClass('menu-item--dd-opened');
   }else{
    $(this).parent().addClass('menu-item--dd-opened');
   }
  });


  $('.lang-panel__icon').click(function(){
   if($(this).parent().is('.lang-panel--opened')){
    $(this).parent().removeClass('lang-panel--opened');
   }else{
    $(this).parent().addClass('lang-panel--opened');
   }
  });


  $('.menu-item__link').click(function(){
   if($(this).parent().is('.menu-item__link--animate')){
    $(this).parent().removeClass('menu-item__link--animate');
   }else{
    $(this).parent().addClass('menu-item__link--animate');
   }
  });


  // lang panel
  $(document).bind('click touchstart', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("lang-panel")){
      $(".lang-panel").removeClass("lang-panel--opened");
    }
  });


  // add-animate-class
  $('.dealers-info').viewportChecker({
      classToAdd: 'dealers-info--animate',
  });


  // scroll to block
  if(window.screen.width < 1024) {
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - 20;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });
  }

  if(window.screen.width > 1023) {
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - 175;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });
  }


  // zoom image
  $('.zoom.imgWrap').zoom();


  // tabs
$('ul.tabs').on('click', 'li:not(.current)', function() {
  $(this).addClass('current').siblings().removeClass('current')
    .parents('div.korpus').find('div.box').eq($(this).index()).fadeIn(800).siblings('div.box').hide();
})


  // 360 image view
  var productViewer = function(element) {
    this.element = element;
    this.handleContainer = this.element.find('.cd-product-viewer-handle');
    this.handleFill = this.handleContainer.children('.fill');
    this.handle = this.handleContainer.children('.handle');
    this.imageWrapper = this.element.find('.product-viewer');
    this.slideShow = this.imageWrapper.children('.product-sprite');
    this.frames = this.element.data('frame');
    //increase this value to increase the friction while dragging on the image - it has to be bigger than zero
    this.friction = this.element.data('friction');
    this.visibleFrame = 0;
    this.loaded = false;
    this.animating = false;
    this.xPosition = 0;
    this.loadFrames();
  } 

  productViewer.prototype.loadFrames = function() {
    var self = this,
      imageUrl = this.slideShow.data('image'),
      newImg = $('<img/>');
    this.loading('0.5');
    //you need this to check if the image sprite has been loaded
    newImg.attr('src', imageUrl).load(function() {
      $(this).remove();
        self.loaded = true;
      }).each(function(){
        image = this;
      if(image.complete) {
          $(image).trigger('load');
        }
    });
  }

  productViewer.prototype.loading = function(percentage) {
    var self = this;
    transformElement(this.handleFill, 'scaleX('+ percentage +')');
    setTimeout(function(){
      if( self.loaded ){
        //sprite image has been loaded
        self.element.addClass('loaded');
        transformElement(self.handleFill, 'scaleX(1)');
        self.dragImage();
        if(self.handle) self.dragHandle();
      } else {
        //sprite image has not been loaded - increase self.handleFill scale value
        var newPercentage = parseFloat(percentage) + .1;
        if ( newPercentage < 1 ) {
          self.loading(newPercentage);
        } else {
          self.loading(parseFloat(percentage));
        }
      }
    }, 500);
  }
  //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
  productViewer.prototype.dragHandle = function() {
    //implement handle draggability
    var self = this;
    self.handle.on('mousedown vmousedown', function (e) {
          self.handle.addClass('cd-draggable');
          var dragWidth = self.handle.outerWidth(),
              containerOffset = self.handleContainer.offset().left,
              containerWidth = self.handleContainer.outerWidth(),
              minLeft = containerOffset - dragWidth/2,
              maxLeft = containerOffset + containerWidth - dragWidth/2;

          self.xPosition = self.handle.offset().left + dragWidth - e.pageX;

          self.element.on('mousemove vmousemove', function (e) {
            if( !self.animating) {
              self.animating =  true;
              ( !window.requestAnimationFrame )
                ? setTimeout(function(){self.animateDraggedHandle(e, dragWidth, containerOffset, containerWidth, minLeft, maxLeft);}, 100)
                : requestAnimationFrame(function(){self.animateDraggedHandle(e, dragWidth, containerOffset, containerWidth, minLeft, maxLeft);});
            }
          }).one('mouseup vmouseup', function (e) {
              self.handle.removeClass('cd-draggable');
              self.element.off('mousemove vmousemove');
          });

          e.preventDefault();

      }).on('mouseup vmouseup', function (e) {
          self.handle.removeClass('cd-draggable');
      });
  }

  productViewer.prototype.animateDraggedHandle = function(e, dragWidth, containerOffset, containerWidth, minLeft, maxLeft) {
    var self = this;
    var leftValue = e.pageX + self.xPosition - dragWidth;
      // constrain the draggable element to move inside his container
      if (leftValue < minLeft) {
          leftValue = minLeft;
      } else if (leftValue > maxLeft) {
          leftValue = maxLeft;
      }

      var widthValue = Math.ceil( (leftValue + dragWidth / 2 - containerOffset) * 1000 / containerWidth)/10;
      self.visibleFrame = Math.ceil( (widthValue * (self.frames-1))/100 );

      //update image frame
      self.updateFrame();
      //update handle position
      $('.cd-draggable', self.handleContainer).css('left', widthValue + '%').one('mouseup vmouseup', function () {
          $(this).removeClass('cd-draggable');
      });

      self.animating = false;
  }

  productViewer.prototype.dragImage = function() {
    //implement image draggability
    var self = this;
    self.slideShow.on('mousedown vmousedown', function (e) {
          self.slideShow.addClass('cd-draggable');
          var containerOffset = self.imageWrapper.offset().left,
              containerWidth = self.imageWrapper.outerWidth(),
              minFrame = 0,
              maxFrame = self.frames - 1;

          self.xPosition = e.pageX;

          self.element.on('mousemove vmousemove', function (e) {
            if( !self.animating) {
              self.animating =  true;
              ( !window.requestAnimationFrame )
                ? setTimeout(function(){self.animateDraggedImage(e, containerOffset, containerWidth);}, 100)
                : requestAnimationFrame(function(){self.animateDraggedImage(e, containerOffset, containerWidth);});
            }
          }).one('mouseup vmouseup', function (e) {
              self.slideShow.removeClass('cd-draggable');
              self.element.off('mousemove vmousemove');
              self.updateHandle();
          });

          e.preventDefault();

      }).on('mouseup vmouseup', function (e) {
          self.slideShow.removeClass('cd-draggable');
      });
  }

  productViewer.prototype.animateDraggedImage = function(e, containerOffset, containerWidth) {
    var self = this;
    var leftValue = self.xPosition - e.pageX;
        var widthValue = Math.ceil( (leftValue) * 100 / ( containerWidth * self.friction ));
        var frame = (widthValue * (self.frames-1))/100;
        if( frame > 0 ) {
          frame = Math.floor(frame);
        } else {
          frame = Math.ceil(frame);
        }
        var newFrame = self.visibleFrame + frame;

        if (newFrame < 0) {
            newFrame = self.frames - 1;
        } else if (newFrame > self.frames - 1) {
            newFrame = 0;
        }

        if( newFrame != self.visibleFrame ) {
          self.visibleFrame = newFrame;
          self.updateFrame();
          self.xPosition = e.pageX;
        }

        self.animating =  false;
  }

  productViewer.prototype.updateHandle = function() {
    if(this.handle) {
      var widthValue = 100*this.visibleFrame/this.frames;
      this.handle.animate({'left': widthValue + '%'}, 200);
    }
  }

  productViewer.prototype.updateFrame = function() {
    var transformValue = - (100 * this.visibleFrame/this.frames);
    transformElement(this.slideShow, 'translateX('+transformValue+'%)');
  }

  function transformElement(element, value) {
    element.css({
      '-moz-transform': value,
        '-webkit-transform': value,
      '-ms-transform': value,
      '-o-transform': value,
      'transform': value,
    });
  }

  var productToursWrapper = $('.cd-product-viewer-wrapper');
  productToursWrapper.each(function(){
    new productViewer($(this));
  });







});





  $(window).load(function() {
    // slider
    $('.main-screen-slider').owlCarousel({
      loop: true,
      nav: true,
      rtl:true,
      dots: false,
      items: 1,
      navContainer: ".main-screen-slider-next",
      autoplay: true,
      autoplayTimeout: 10000,
      autoplaySpeed: 600,
      navSpeed: 600,
      mouseDrag: false
    });
    $('.slider-info').owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      items: 1, 
      autoplay: false,
      animateOut: 'fadeOut',
      autoplayTimeout: 10000,
      autoplaySpeed: 600,
      navSpeed: 600,
      autoHeight: true,
      mouseDrag: false
    });
    $('#carousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 170,
      itemMargin: 30,
      asNavFor: '#slider'
    });
    $('#slider').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousel"
    });
    $('#carousel2').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 170,
      itemMargin: 30,
      asNavFor: '#slider2'
    });
    $('#slider2').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousel2"
    });
    $('#carousel3').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 170,
      itemMargin: 30,
      asNavFor: '#slider3'
    });
    $('#slider3').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousel3"
    });

  });





  // header fixed
$(window).scroll(function() {
  if ($(this).scrollTop() > 200){  
    $('body').addClass("header-fix-wrap");
  }
  else{
    $('body').removeClass("header-fix-wrap");
  }
});



//Plugin placeholder
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);


/* mask input*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);


//file
!function(e){e.addModule(function(e){"use strict";return{name:"File",selector:'input[type="file"]',options:{fakeStructure:'<span class="jcf-file"><span class="jcf-fake-input"></span><span class="jcf-upload-button"><span class="jcf-button-content"></span></span></span>',buttonText:"Choose file",placeholderText:"No file chosen",realElementClass:"jcf-real-element",extensionPrefixClass:"jcf-extension-",selectedFileBlock:".jcf-fake-input",buttonTextBlock:".jcf-button-content"},matchElement:function(e){return e.is('input[type="file"]')},init:function(){this.initStructure(),this.attachEvents(),this.refresh()},initStructure:function(){this.doc=e(document),this.realElement=e(this.options.element).addClass(this.options.realElementClass),this.fakeElement=e(this.options.fakeStructure).insertBefore(this.realElement),this.fileNameBlock=this.fakeElement.find(this.options.selectedFileBlock),this.buttonTextBlock=this.fakeElement.find(this.options.buttonTextBlock).text(this.options.buttonText),this.realElement.appendTo(this.fakeElement).css({position:"absolute",opacity:0})},attachEvents:function(){this.realElement.on({"jcf-pointerdown":this.onPress,change:this.onChange,focus:this.onFocus})},onChange:function(){this.refresh()},onFocus:function(){this.fakeElement.addClass(this.options.focusClass),this.realElement.on("blur",this.onBlur)},onBlur:function(){this.fakeElement.removeClass(this.options.focusClass),this.realElement.off("blur",this.onBlur)},onPress:function(){this.fakeElement.addClass(this.options.pressedClass),this.doc.on("jcf-pointerup",this.onRelease)},onRelease:function(){this.fakeElement.removeClass(this.options.pressedClass),this.doc.off("jcf-pointerup",this.onRelease)},getFileName:function(){var t="",s=this.realElement.prop("files");return s&&s.length?e.each(s,function(e,s){t+=(e>0?", ":"")+s.name}):t=this.realElement.val().replace(/^[\s\S]*(?:\\|\/)([\s\S^\\\/]*)$/g,"$1"),t},getFileExtension:function(){var e=this.realElement.val();return e.lastIndexOf(".")<0?"":e.substring(e.lastIndexOf(".")+1).toLowerCase()},updateExtensionClass:function(){var e=this.getFileExtension(),t=this.fakeElement.prop("className"),s=t.replace(new RegExp("(\\s|^)"+this.options.extensionPrefixClass+"[^ ]+","gi"),"");this.fakeElement.prop("className",s),e&&this.fakeElement.addClass(this.options.extensionPrefixClass+e)},refresh:function(){var e=this.getFileName()||this.options.placeholderText;this.fakeElement.toggleClass(this.options.disabledClass,this.realElement.is(":disabled")),this.fileNameBlock.text(e),this.updateExtensionClass()},destroy:function(){this.realElement.insertBefore(this.fakeElement).removeClass(this.options.realElementClass).css({position:"",opacity:""}),this.fakeElement.remove(),this.realElement.off({"jcf-pointerdown":this.onPress,change:this.onChange,focus:this.onFocus,blur:this.onBlur}),this.doc.off("jcf-pointerup",this.onRelease)}}})}(jcf);


/*!
 * clipboard.js v1.5.12
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){var o=t("matches-selector");e.exports=function(t,e,n){for(var i=n?t:t.parentNode;i&&i!==document;){if(o(i,e))return i;i=i.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var r=t("closest");e.exports=o},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return s(document.body,t,e,n)}var c=t("./is"),s=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t,e){if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var i=Element.prototype,r=i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=o},{}],6:[function(t,e,n){function o(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;i>o;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;a>r;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=(0,i.default)(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},a(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:6}],9:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),f=i(o),d=function(t){function e(n,o){r(this,e);var i=a(this,t.call(this));return i.resolveOptions(o),i.listenClick(n),i}return c(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return s("action",e)},e.prototype.defaultTarget=function t(e){var n=s("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return s("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(u.default);t.exports=d})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});