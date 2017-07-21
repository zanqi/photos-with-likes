This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### `npm install` then `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Architecture
The main UI Components arrange from parent to children like this: App > PhotoList > Photo. App is the smart component that talks to a service: AlbumStore. The other components are kept dumb.

### Features
* Likes
* Delete
* Async albumStore

### Screenshot

![Screenshot](/../screenshot/Capture.JPG?raw=true "Screenshot")