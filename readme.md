# Mahanoro Station
This project is made to book a seat on the bus. It based on an api which contain an object.
These are the steps to build this project:

Components:
-	Create an index.html.
-	Added a div which has an id “root”
-	Create an index.js and put it in a script in the index.html

State:
-	Create a state.js file and add those following :
-	 trips: [],
-	 displayModal: false,
-	 selectedSeats: [],
-	 account: []

NB: Do not forget to export that object as a default.

Store: 

Create a store file :
-	Import the state from the state file.
-	Import thunk and applyMidleware from the redux.
-	Create the store and set the state, apply and the reducers as parameters.
-	Export the store as a default.

Index.js:
-	Import React, ReactDOM and render the ReactDOM.
-	Import Provider from react-dom.
-	Import the store and set it as a props of the provider.
-	Import the app function and wrap it in a provider. 

Actions:

Create an index.js in this folder and put all the actions inside.
Reducers:
_ create a reducer for each action and combine them by using combinedReducer.
-	Export the combined reducer as a default.

Let’s start:
Open the terminal:
-npm init.
- npm install react, react-dom, react-router-dom, redux, thunk and redux-thunk.
Run parcel index.html to show your code in the browser.

All of the coomponents files:

1. Menu.js
2. CitiesList.js
3. City.js
4. Trip.js

To get the city use useParams and compare the destination to the useParasms value.

Use some method to grab the id of the seat which is selected to store them in the selectedSeats in the state.

NB: It would be better to put everything in a src folder except the index.html.

- You can find the demo: https://mahanoro-station-manjaka.netlify.app/
- Github: https://github.com/moro-patana/mahanoro-station

Happy coding!

