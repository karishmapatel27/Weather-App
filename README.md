# MVP

* The user will be able to type a city name into a form and receive current weather information
* Based on the conditions in that city, they will see a message display which is relevant to the weather
* Below this, there is a recommendations tab which they click on (probably a hash route) which will display at least one other recommendation or weather relevant information, meme, etc

# Stretch (in no particular order)

* Utilise more APIs in the recommendations tab e.g. a game
* Display a map?
* Up our CSS game
* Create more routes or stateful components (e.g. on click etc)
* Deploy to Heroku
* Refactor code

# Team
* Marika
* Kyle
* Karishma
* Michael

## Setup

To get started, clone this repo and then:

```
cd TellStory
npm install
npm run dev
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

----


# General Outline of Tasks

For this project we are mainly working on the client side.


## Initial Decisions / Stuff that's not actually coding
* Components - names, how many
* What properties we want to get from the weather API JSON (e.g.city name, max temp... ) and how many weather types we will have
* What messages we are going to display for each weather type
* Get CSS images for weather

----

## Server Side

- CSS: General styling rules for the whole page. Also need to get CSS images, store them in public folder, and make sure they display to the correct size/layout.

- Routes file - may not need anything additional. (Need to check if the post route for the location input form needs to go here or on the client side in API function?)

----
## Client Side

- Api.js: use superagent to write function for Weather API - we want to take the input information from post route and insert it into the API function get request URL. This will return a JSON object from which we select the properties we would like to display (city name, max and min temperature in celsius, description (e.g. cloudy) etc)

- Based on the weather conditions, we will display a message in our component file (e.g. if sunny, display x)... One idea is we can have multiple options for each condition and the messages can be selected randomly.

- Hash route for Recommendations component: E.g. this could just display a specific photo from an API and perhaps a message to go with it. This also displays conditionally based on the weather condition.

- Components - there will be at least 3-4 (and I suspect that they will all need to be stateful):
  - Location submit input (could be combined with the weather conditions one though)
  - Weather conditions (from API)
  - Message of recommendation (string)
  - Recommendations (hash route) for displaying our other APIs


----

# A starter webpack project for React

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

