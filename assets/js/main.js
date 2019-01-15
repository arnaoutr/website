$(function() {
  // var path = window.location.pathname;
  // $(".flexnav li a[href*='" + path + "']").addClass("active");
  var path = window.location.pathname;
  if (path.substr(path.length) != 1) {
    $(".flexnav li a[href='" + path + "']").addClass("active");
  }
});
