// NEWS TICKER
(function($){//newsTicker
  jQuery.fn.newsTicker = function(settings) {
    settings = jQuery.extend({
      speed: 1000,
      delay: 3000
    }, settings);
    return this.each(function(){
      var ticker  = $(this),
          list    = ticker.find('.ticker-list'),
          item    = list.find('.item'),
          i = 0,
          c = item.size();
      ticker.addClass('render');
      item.width(ticker.width());
      switchItem();
      function switchItem() {
        $(item).fadeOut(settings.speed);
        $(item[i]).fadeIn(settings.speed, function(){
          if (i == c-1) {
            i = 0;
          } else {
            i++;
          }
          setTimeout(function(){switchItem()},settings.delay);
        });
      };
    });
  };
})(jQuery);