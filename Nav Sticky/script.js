/* Begin jQuery */ ;
(function ($) {

  $(window).scroll(function (e) {
    if ($(window).scrollTop() >= $("header").height() + 30) {
      $(".sticky").addClass("fixed");
      $(".content").addClass("margin");

    } else {
      $(".sticky").removeClass("fixed");
      $(".content").removeClass("margin");
    }
  e.stopPropagation();
  
  });

  // DOM ready
  $(function () {

    /* Begin Scripts */

    /* Navigation */

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('nav ul').toggle();
    });
    // Toggle active CSS class (X - close)
    document.querySelector("#nav-toggle").addEventListener("click", function () {
      this.classList.toggle("active");
    });
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li > a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });


    /* End Scripts */

    /* Everything goes inside these two tags */
  });

})(jQuery);