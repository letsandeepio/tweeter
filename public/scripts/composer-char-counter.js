let TWEET_LIMIT = 140;

$(document).ready(function () {
  console.log('JQuery');
  $('#tweet-text').on('keyup', function (event) {
    $('#js--tweet-counter').text(TWEET_LIMIT - this.val().length);
  });
});
