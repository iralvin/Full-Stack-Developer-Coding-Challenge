## Rocket Communications Code Challenge

Live Link: https://awong-rocket.netlify.app

This is the frontend portion of the coding challenge. It was built using React.js. 

I used react-router to handle the different URLs for each "page" and implemented JSON web tokens for user log ins. Tokens currently only serve the purpose to determine if a previous user was still signed in when they closed the window.

A simple dark mode button was added that changed the color theme accordingly.

Tables were built using the material-table library which allows for easy user manipulation (sorting, filtering, searching, etc) if enabled. Unix times were converted to local date/times for readability.

For testing purposes, I did not implement any sort of username/password requirements (ie. minimum length, special characters/numbers, password confirmation). 
Username/password combinations can be as simple as 1/1 or user/pass.

Due to my current work schedule and time constraints, there were some features I was not able to implement. Even though tokens were implemented, the token value itself does not currently hold any significance. Ideally, I would like to have taken the token value and decrypt it to determine the user associated with it to determine authentication. 

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
