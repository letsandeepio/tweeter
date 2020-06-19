/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */
/* global $ */

/* Author: Sandeep Kumar Chopra
    Author Github: github.com/letsandeepio
    Email: sandeepchopra7@gmail.com
    Project Name: Tweeter
    File Name: client.js
    Project description: A full stack twitter-like app with basic & limited functionality
    */

//All utitlity helper functions goes here

//copied from compass for escaping the user tweet content for avoiding XSS injection
const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// given a tweet obj, returns HTML for rendering the tweet into the DOM
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
          <div class="timestamp">${moment(tweetObj.created_at).fromNow()}</div>
          <div class="tweet-actions">
            <div><i class="far fa-flag"></i></div>
            <div><i class="fas fa-retweet"></i></div>
            <div><i class="far fa-heart"></i></div>
          </div>
        </footer>
      </article>`;
};

//helper function to assign event listeners for individual tweets to show and hide tweet actions upon hover.
const attachEventListeners = () => {
  $('article.tweet').on('mouseenter', function () {
    console.log('working');
    $(this).find('.tweet-actions').css('visibility', 'visible');
  });

  $('article.tweet').on('mouseleave', function () {
    console.log('working');
    $(this).find('.tweet-actions').css('visibility', 'hidden');
  });
};

//provided an array of tweetObj , generate tweet html and append it to DOM, and runs a callback
const renderTweets = function (tweets, callback) {
  for (const tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
  callback();
};

//load tweets through AJAX Request
const loadtweets = () => {
  $.ajax('/tweets', { method: 'GET' }).then(function (tweetsData) {
    renderTweets(tweetsData, attachEventListeners);
  });
};

$(document).ready(function () {
  loadtweets();

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

  $('#js--cta-newtweet').click(function (e) {
    e.preventDefault();
    $('.tweet-composer').slideToggle(function () {
      console.log($('.tweet-composer').css('display'));
      if ($('.tweet-composer').css('display') === 'block') {
        $('#tweet-text').focus();
      }
    });
  });

  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
