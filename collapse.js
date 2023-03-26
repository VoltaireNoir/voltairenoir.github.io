  $(document).ready(function() {
    $(".block").click(function() {
      $(this).children(".block-text").slideToggle(200);
    });
  });
