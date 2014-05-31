(function( $ ) {

  $.fn.jekyllScroll = function(options) {
    
    var defaults = {
      'postWrapper': 'article',
      'scrollTarget': 100,
      'loadNumber': 5,
      'parentElement': this[0],
      'pagination': '.pagination'
    };

    var settings = $.extend( {}, defaults, options );

    return this.each(function() {
      var getPosts = function(element) {
        $.getJSON('posts.json', function( data ) {
          settings = $.extend( {}, settings, data );
        });
      };

      var hidePagination = function() {
        $(settings.pagination).remove();
      }

      var init = function() {
        if (typeof(Array.prototype.forEach) == "function") {
          getPosts();
          hidePagination();
          window.onscroll = function() {
            var position = $('body').height() - window.pageYOffset;
            if (position - window.innerHeight <= 100) {
              writePosts();
            }
          };
        }
      };

      var writePosts = function() {
        var postcount = $(settings.parentElement).children(settings.postWrapper).length;
        var i = 0;
        var theTemplateScript = $("#blog-posts").html();  
        var theTemplate = Handlebars.compile (theTemplateScript);
        settings.posts.forEach(function(post) {
          if (i >= postcount && i < postcount + settings.loadNumber) {
             $(settings.parentElement).append (theTemplate (post));
          }
          i++;
        });
      };

      init();
    });

  };
})(jQuery)