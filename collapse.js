  $(document).ready(function() {
    $(".block-header").click(function(event) {
      event.stopPropagation();
      $(this).next(".block-content").slideToggle(200);
    });
  });
