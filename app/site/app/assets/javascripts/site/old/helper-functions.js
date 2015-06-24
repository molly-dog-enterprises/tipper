MDE.AJAX_REQUESTER = (function() {
  return function (url, success) {
    return $.ajax({
      url: url,
      dataType: 'json',
      error: function (xhr, status, err) {
        console.error(url, status, err.toString());
      }
    });
  };
})();
