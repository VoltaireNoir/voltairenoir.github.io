$(document).ready(function() {
  $(".block-header").click(function(event) {
    event.stopPropagation();
    $content = $(this).siblings(".block-content");
    $content.slideToggle(200);
    $content.parent().toggleClass("hidden");
  });
});
