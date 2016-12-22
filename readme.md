
# Hailstone sequence as a microservice
### A minimal NodeJS microservice demo

## Get it

Clone the repo with like
```bash
git clone ...
```

## Compile it

Joking right?

## run it

Startup 2 terminals and run the server in one of them:

```bash
nodejs server
```

Then switch to the other terminal and run the request program:

```bash
nodejs request
```

You should see the server respond in both terminals

## request.js

Requests the a page from localhost and prints the response

## response.js

Contains the function that actualy responds to the request

## server.js

Handles the initial request and delegates handling on to response.js

