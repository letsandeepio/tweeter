/* global $ */

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  user: {
    name: 'Newton',
    avatars: 'https://i.imgur.com/73hZDYK.png',
    handle: '@SirIsaac'
  },
  content: {
    text: 'If I have seen further it is by standing on the shoulders of giants'
  },
  created_at: 1461116232227
};

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

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like

$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
