# Simple Hotel Check

## Test task

1. Simple Hotel Check

2. Based on the test task for LIIS Engineering Solutions LLC, the following is being developed:<br>
A service where you can find hotels on request and add them to your favorites. Contains 2 pages:
- Home. Contains a search form, a list of hotels, and a list of favorite hotels.
- Authorization page. Here the user can log in.
On the main page, the default value is: current day, Moscow city, number of days - 1. By clicking on the heart, the hotel is added / removed to favorites. By clicking on the filter - the corresponding filtering.
On the authorization page, you can log in with any mail and a password that is being validated (login - any mail, password - without Cyrillic, at least 8 characters).

3. Tech stack:
  - framework React JS;
  - lib react-router-dom;
  - state manager Redux, react-redux;
  - Working with an external API (redux-saga is used).

4. System preferences: HTML5/CSS3/JavaScript; web-browser (dev browser - Opera); framework - React (create-react-app, react-router-dom), state manager – Redux (redux, react-redux, redux-saga).<br>
To work on localhost, it is recommended to use the API <code>https://cors-anywhere.herokuapp.com/corsdemo</code>, add to the beginning of the url addresses (otherwise there is a problem with CORS).<br>
[Hotel data API](https://support.travelpayouts.com/hc/ru/articles/115000343268-API-данных-отелей#price/ "Hotel data API")

5. Improvement plans:
  - adaptive and responsive;
  - date picker stylization;
  - input styling for the number of days;
  - possibility to scroll in the list of hotels;
  - translation of the request into Russian for the page title (location);
  - TypeScript

6. [deployed on netlify.](https://antoshkow-simple-hotel-check.herokuapp.com/ "deployed on netlify.")
