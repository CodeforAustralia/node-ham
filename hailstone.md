
## Hailstones?


[The conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture) is that no matter what number you start with, you will always eventually reach 1, so it's totally not at all an infinate loop or anything

## The function

If n is even, divide it by 2 to get n / 2. If n is odd, multiply it by 3 and add 1 to obtain 3n + 1

## What we need

- A predicate is_even?
- Division by 2
- Multiplication by 3
- Incrementing
- A predicate is_one?

## How to hook it up

requesting ```/hailstone/n``` will start a loop that in turn calls

- call ```is_one/n``` (and prepends one on the response and terminates if true)
- then call ```is_even/n```
  - if even
    - x = call ```div_by_2/n```
    - call ```hailstone/x```
  - if odd
    - x = call ```multiply_by_3/n```
    - y = call ```plus_1/x```
    - call ```hailstone/y```

