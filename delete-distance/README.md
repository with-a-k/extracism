# Delete Distance

Given two strings, find the minimum number of characters that need to be removed to turn them into the same string. The removed characters may be from either or both of them.

The function should return 0 if the two strings are the same, and the sum of the lengths of both strings if neither of them share characters. It should never return anything greater than that.

This problem is similar to edit distance, although here characters can't be changed or added.

## Examples
- Comparing "bard" to "bar" should return 2
- Comparing "bored" to "cord" should return 3
- Comparing "pillow" to "pillow" should return 0
- Comparing "tram" to "sees" should return 8

## Run Tests

Simply run:

    jasmine delete-distance.spec.js

in the command-line interface of your choice.
