# photo-album-cli

CLI application that displays photo IDs and titles from a jsonplaceholder endpoint

# Running the app

1. Clone this repository and `cd` into the newly created directory.
2. Run `npm install` to install the necessary dependencies.
3. Run the app with `node . 1` where `1` is the ID of the album you'd like to filter for.

# Features

- Makes a request to a jsonplaceholder endpoint to retrieve a list of photo albums and their photos
- Can filter for a specific album ID
- 0 production dependencies
  - [Jest](https://www.npmjs.com/package/jest) is a dev dependency used to run unit tests.
