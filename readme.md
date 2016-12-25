
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

Startup 2 terminals and run the servers in one of them:

```bash
nodejs divide2_server &
nodejs even_server &
nodejs increment_server &
nodejs is_one_server &
nodejs multiply_server &
```

Then switch to the other terminal and run the request program:

```bash
nodejs request
```

You should see the server responses printed in the request window

## Files

#### *_server.js

Sets up the associated servers and prints the endpoint to the screen

#### *.js

Contains the function that actualy responds to the request

