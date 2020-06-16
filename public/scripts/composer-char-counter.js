const TWEET_LIMIT = 140;

$(document).ready(function () {
  console.log('JQuery');
  $('#tweet-text').on('keyup', function (event) {
    let charRemaining = TWEET_LIMIT - $(this).val().length;
    const tweetCounter = $('#js--tweet-counter');

    if (charRemaining < 0) {
      tweetCounter.addClass('over-limit-red');
    } else {
      tweetCounter.removeClass('over-limit-red');
    }
    tweetCounter.text(charRemaining);
  });
});
