$(document).ready(function() {
  $(".block-header").click(function(event) {
    event.stopPropagation();
    if ($(this).hasClass("main-header")) {
      toggle_main(this);
    } else {
      toggle(this);
    }
  });
  $(this).keypress(event => {
    if (event.key == 'j' || event.key === ' ') {
      toggle_next_main();
    } else if (event.key == 'k') {
      toggle_prev_main()
    } else if (event.key == "q") {
      toggle_main(active_main().children(".main-header"));
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

function toggle_next_main() {
  let header = active_main().next().children(".main-header");
  if (header.length === 0) {
    toggle_main($(".main").first().children(".main-header"));
  } else {
    toggle_main(header)
  }
}

function toggle_prev_main() {
  let header = active_main().prev().children(".main-header");
  if (header.length === 0) {
    toggle_main($(".main").last().children(".main-header"));
  } else {
    toggle_main(header)
  }
}

function active_main() {
  return $('.main').not('.hidden').first();
}
