# spike-static-components-example

An example of how to use static and client rendered preact components with spike

## Setup

- make sure [node.js](http://nodejs.org) is at version >= `6`
- `npm i spike -g`
- clone this repo down and `cd` into the folder
- run `npm install`
- run `spike watch` or `spike compile`

## Architecture

This is an entirely unique architecture pattern, to the best of our knowledge nothing else similar to this exists right now. So take a moment to let it sink in. As a simple guide:

- Preact components are in `assets/js/components`
- Client render is in `assets/js/index.js`
- Static implementation is in `views/index.sgr`
- "Server render" configuration is in `app.js`

Happy to field any questions about this on twitter at [@jescalan](https://twitter.com/jescalan), or better yet in [the static-dev slack](https://static-dev-slack.herokuapp.com/) :grin:
