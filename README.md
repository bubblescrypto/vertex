# Vertex Platform

## Requirements
- `yarn` - package management
- `node` - JS
- `mongodb` - database

## Install
Get the code and install the dependencies.
- `git clone https://github.com/bubblescrypto/vertex.git`
- `yarn install`

## Electron
Run with development server, viewed in web browser.
- `yarn run start`

Run with electron.
- `yarn run build` - to build before electron can access it in `./dist` folder.
- `./node_modules/.bin/electron electron.js`

## Server
- `node server/index.js`
Server will start on port url and db specified in `./server/index.js`.