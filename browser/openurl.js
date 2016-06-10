exports.open = function(url, callback) {
  var win = window.open(url);
  if (!win) {
    callback(new Error('Failed to open `url`'));
  }
  callback(null);
}
