
# Node H.A.M.
#### [H]ailstone-sequence [A]s a (nodeJS) [M]icroservice

Created for a [hailstone exercise](https://github.com/PuZZleDucK/node-ham/blob/master/hailstone.md).

## Git the code

Clone the repo with like
```bash
git clone https://github.com/PuZZleDucK/node-ham.git
```

## Compile it

Joking right?

## Run it

Startup 2 terminals and run the server in one of them:

```bash
nodejs server
```

Then switch to the other terminal and run the request program:

```bash
nodejs request
```

You should see the server respond in both terminals

## Files

#### request.js

Requests the a page from localhost and prints the response

#### response.js

Contains the function that actualy responds to the request

#### server.js

Handles the initial request and delegates handling on to response.js

