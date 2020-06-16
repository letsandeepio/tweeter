/* global $ */

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let TWEET_LIMIT = 140;

$(document).ready(function () {
  console.log('JQuery');
  $('#tweet-text').on('keyup', function (event) {
    $('#js--tweet-counter').text(TWEET_LIMIT - $('#tweet-text').val().length);
  });
});
