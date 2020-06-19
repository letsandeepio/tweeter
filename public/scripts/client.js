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

//load tweets through AJAX Request and attach required event listeners after loading
const loadtweets = () => {
  $.ajax('/tweets', { method: 'GET' }).then(function (tweetsData) {
    renderTweets(tweetsData, attachEventListeners);
  });
};

$(document).ready(function () {
  //global JQuery Objects;
  const errorDiv = $('#js--error-bar'); //for displaying the error
  const tweetText = $('#tweet-text'); //text area containing the user input text
  const tweetsContainer = $('#tweets-container'); //the container which contains the rendered tweets
  const tweetComposeButton = $('#js--cta-newtweet'); //the compose new tweet button for toggling tweet composer
  const tweetComposer = $('.tweet-composer'); //the tweet composer component
  const scrollButton = $('.scrollToTop'); //dynamic scroll to top button

  loadtweets();

  $('#js--new-tweet').submit(function (event) {
    errorDiv.slideUp();
    event.preventDefault();
    const tweetTextVal = tweetText.val();

    //tweet validation
    if (tweetTextVal.length === 0) {
      errorDiv.slideDown().text('Tweet cannot be empty');
      return false;
    }
    if (tweetTextVal.length > 140) {
      errorDiv.slideDown().text('Your Tweet is too long');
      return false;
    }
    //if successful
    $.ajax('/tweets', { method: 'POST', data: $(this).serialize() }).then(
      function () {
        tweetsContainer.empty();
        loadtweets();
      }
    );

    //reset the contents of the tweet text area
    tweetText.val('');
  });

  tweetComposeButton.click(function (e) {
    e.preventDefault();
    tweetComposer.slideToggle(function () {
      if (tweetComposer.css('display') === 'block') {
        tweetText.focus();
      }
    });
  });

  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      scrollButton.fadeIn();
    } else {
      scrollButton.fadeOut();
    }
  });

  //Click event to scroll to top
  scrollButton.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
