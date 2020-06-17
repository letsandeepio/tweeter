/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */
/* global $ */

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (tweetObj) => {
  return `<article class='tweet'>
        <header>
          <div class="profile"><img src='${
            tweetObj.user.avatars
          }' class='tweet-profile-pic'></div>
          <div class="username">${tweetObj.user.name}</div>
          <div class="userid">${tweetObj.user.handle}</div>
        </header>
        <main>
          ${escape(tweetObj.content.text)}
        </main>
        <footer>
          <div class="timestamp">${tweetObj.created_at}</div>
          <div class="tweet-actions">
            <div><i class="far fa-flag"></i></div>
            <div><i class="fas fa-retweet"></i></div>
            <div><i class="far fa-heart"></i></div>
          </div>
        </footer>
      </article>`;
};

const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
};

$('#js--new-tweet').submit(function (event) {
  const errorDiv = $('#js--error-bar');
  errorDiv.slideUp();
  event.preventDefault();
  const tweetText = $('#tweet-text').val();
  if (tweetText.length === 0) {
    errorDiv.text('Tweet cannot be empty').slideDown();
    return false;
  }
  if (tweetText.length > 140) {
    errorDiv.text('Your Tweet is too long').slideDown();
    return false;
  }
  $.ajax('/tweets', { method: 'POST', data: $(this).serialize() }).then(
    function () {
      $('#tweets-container').empty();
      loadtweets();
    }
  );

  $('#tweet-text').val('');
});

const loadtweets = () => {
  $.ajax('/tweets', { method: 'GET' }).then(function (tweetsData) {
    renderTweets(tweetsData);
  });
};

$(document).ready(function () {
  loadtweets();

  $('#js--cta-newtweet').click(function (e) {
    e.preventDefault();
    $('#js--new-tweet').slideToggle();
  });
});
