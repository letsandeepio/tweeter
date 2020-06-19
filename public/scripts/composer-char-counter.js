const TWEET_LIMIT = 140; //tweet limit constant, in case, in future we want to increase the tweet limit.

$(document).ready(function () {
  $('#tweet-text').on('keyup', function (event) {
    const charRemaining = TWEET_LIMIT - $(this).val().length;
    const tweetCounter = $('#js--tweet-counter');

    if (charRemaining < 0) {
      tweetCounter.addClass('over-limit-red');
    } else {
      tweetCounter.removeClass('over-limit-red');
    }
    tweetCounter.text(charRemaining);
  });
});
