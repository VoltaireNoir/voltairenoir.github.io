$(document).ready(function() {
  $(".block-header").click(function(event) {
    event.stopPropagation();
    $content = $(this).siblings(".block-content");
    if ($content.parent().hasClass("hidden")) {
      $content.slideToggle(200);
      $content.parent().toggleClass("hidden");
    } else {
      $content.slideToggle(200, function() {
        $content.parent().toggleClass("hidden");
      });
    }
  });
});
