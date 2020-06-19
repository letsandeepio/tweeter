# Tweeter Project

Tweeter is a simple, single-page Twitter clone based on responsive web design principles using HTML, CSS, JS, jQuery and AJAX on the front-end, and Node, Express and MongoDB on the back-end.

# Challenges (Stretch Works)

1. **Tweet Composer Animation**: The tweet composer animates (slides up and down) based on user interaction with Write a new Tweet button.
2. **Tweet Action Buttons**: small tweet action buttons (flag, retweet and like) appears on hover over the individual tweet cards.
3. **Scroll to top button**: An arrow pointing upward conveniently fades in view as user begins to scroll down the content on the page. Upon click, user is taken to the top of the web page.
4. **Timeout for tweet Errors** : If tweet is not validated due to some error, the said error message disappears after 10 seconds.
5. **SASS** : Project make use of SASS variables & nesting in order to keep the css code modular by having all CSS code in components. It is still functional & fast using single entry point index.css for HTTP requests.
6. **Moment.js**: user friendly relative time of the tweet is displayed to user using moment.js (a few seconds ago, one day ago etc.)
7. **GitMoji**: Adopted gitmoji system of git commit messages to keep messages succint & understanding without sacrificing clarity.
   Commit type | Emoji |
   |:---------------------------|:----------------------------------------------|
   | Initial commit | :tada: `:tada:` |
   | New feature | :sparkles: `:sparkles:` |
   | Bugfix | :bug: `:bug:` |
   | Cosmetic | :lipstick: `:lipstick:` |
   | Tests | :rotating_light: `:rotating_light:` |
   | Improve format/structure | :art: `:art:` |
   | Refactor code | :hammer: `:hammer:` |
   | Removing code/files | :fire: `:fire:` |

---

# Screenshots

## Welcome Page

!['welcome page](https://raw.githubusercontent.com/letsandeepio/tweeter/master/public/screenshots/welcome.png)

## Tweet Actions that appear with Hover

!['Tweet actions button'](https://raw.githubusercontent.com/letsandeepio/tweeter/master/public/screenshots/tweet-action-buttons.png)

## Responsive Mobile View

!['Mobile View'](https://raw.githubusercontent.com/letsandeepio/tweeter/master/public/screenshots/mobile-view.png)

## Tweet Validation & Error Messages

!['tweet composer'](https://raw.githubusercontent.com/letsandeepio/tweeter/master/public/screenshots/tweetcomposer.png)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body Parser
- Chance
- Express
- MD5

CDN

- Moment.JS
- Jquery
- Normalize.css
