/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */
/* global $ */

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from initial-tweets.json

const createTweetElement = (tweetObj) => {
  return `<article class='tweet'>
        <header>
          <div class="profile"><img src='${tweetObj.user.avatars}' class='tweet-profile-pic'></div>
          <div class="username">${tweetObj.user.name}</div>
          <div class="userid">${tweetObj.user.handle}</div>
        </header>
        <main>
          ${tweetObj.content.text}
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
  event.preventDefault();
  $.ajax('/tweets', { method: 'POST', data: $(this).serialize() }).then(
    function (morePostsHtml) {
      console.log('Success: ', morePostsHtml);
    }
  );
});

const loadtweets = () => {
  $.ajax('/tweets', { method: 'GET' }).then(function (tweetsData) {
    renderTweets(tweetsData);
  });
};

loadtweets();
