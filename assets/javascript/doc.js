// initializing float menu button, and its setup
$(document).ready(function() {
  $(".fixed-action-btn").floatingActionButton();
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "top"
  });
});
//------------------------------------------------------------------------
//initializing tooltip
$(document).ready(function() {
  $(".tooltipped").tooltip();
});
//-------------------------------------------------------------------------
//smooth scroll to our anchor links
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          { scrollTop: target.offset().top },
          800,
          function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
//-------------------------------------------------------------------------
//initializing drop input for specialities
$(document).ready(function(){
    $('select').formSelect();
  });
   //-------------------------------------------------------------------------