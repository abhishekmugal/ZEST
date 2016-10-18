(function($){
	$(function(){

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      console.log(scrollTop);
      if (scrollTop > 1) {
        $(".icon").addClass("fixed");
        $("ul.menu").addClass("fixed");
      }
      else {
        $(".icon").removeClass("fixed");
        $("ul.menu").removeClass("fixed");
      }
    });
    
	}); // end of document ready
})(jQuery); // end of jQuery name space