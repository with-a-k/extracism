# Nest Assign

Object.assign() is a JS function that copies properties from one object to another.

It works in a predictable, but sometimes undesirable, way when presented with nested objects, though.

Implement a variant of Object.assign() that allows properties on nested objects to be preserved.

## Examples
- `assignest({ a: 1 }, { a: 3 })`: `{ a: 3 }`
- `assignest({ a: 1 }, { b: 2 })`: `{ a: 1, b: 2 }`
- `assignest({ a: { x: 0 } }, { a: { x: 5 } })`: `{ a: { x: 5 }}`
- `assignest({ a: { x: 0 } }, { a: { y: 7 } })`: `{ a: { x: 0, y: 7 }}`

## Run Tests

Simply run:

    jasmine nest-assign.spec.js

in the command-line interface of your choice.
