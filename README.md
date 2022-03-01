# Anolet

### Production: https://anolet.herokuapp.com/ | Do not share
### Production (More Reliable): https://anolet.phexora.com/ | Do not share
## Running for the first time
When running for the first time, run `npm i` to install the dependencies.

## Running in a development environment
To run in a development environment, run `npm run dev`.
This will start the server with nodemon and will automatically restart when changes to server files are made.

In addition, it will also start webpack in watch mode, meaning it will automatically compile your changes to any js or scss files to the bundle.

## Running in production
**IMPORTANT** In order to not leak source maps in production, run `npm run build` before you start.
Note that you don't need to run build in production as Heroku will automatically build before it starts the server, the above notice is for simulated production or when you're running a public non-production production environment on your own server.

After you have built webpack in the production environment, you can start the server with `npm start`.
