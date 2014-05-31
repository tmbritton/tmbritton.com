(function( $ ) { 
  var site = {

    init: function() {
      site.scroll('#posts');
    },
    scroll: function(selector) {
      $(selector).jekyllScroll({
        'postWrapper': 'article',
        'scrollTarget': 100,
        'loadNumber': 5
      });
    }
  };

  site.init();
}( jQuery ));