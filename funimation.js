$(function() {
    $('.logo').fadeOut(3000);
});

// $(document).ready({
//   ajaxStart: function() { $body.addClass("loading");    },
//   ajaxStop: function() { $body.removeClass("loading"); }
// });

function myClick() {
  setTimeout(
    function() {
      document.getElementById('.typeform-widget').style.display='none';
      document.getElementById('div2').style.display='none';
    }, 5000);
}
