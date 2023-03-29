$(document).ready(function() {
  $(".block-header").click(function(event) {
    event.stopPropagation();
    if ($(this).hasClass("main-header")) {
      toggle_main(this);
    } else {
      toggle(this);
    }
  });
});

function toggle(header) {
  $content = $(header).siblings(".block-content");
  $parent = $content.parent();
  if ($parent.hasClass("hidden")) {
    $parent.removeClass("hidden");
    $content.slideDown(200);
  } else {
    $content.slideUp(200, function() {
      $parent.addClass("hidden");
    });
  }
}

function toggle_main(header) {
  // if the main block is not hidden, close it and early return
  let $header = $(header);
  let $parent = $header.parent();
  if (!$parent.hasClass('hidden')) {
    $header.siblings(".block-content").slideUp(200, function() {
      $parent.addClass("hidden");
    });
    return;
  }

  $('.main').each(function() {
    // if the main block is not hidden
    if (!$(this).hasClass('hidden')) {
      $(this).children(".block-content").slideUp(200);
      $(this).addClass("hidden");
    }
  });

  $header.siblings(".block-content").slideDown(200);
  $parent.removeClass("hidden");
}
