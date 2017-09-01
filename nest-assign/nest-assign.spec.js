var assignest = require('./nest-assign');

describe('assignest', function() {
  //All cases use JSON.stringify, since objects are passed by reference
  it('overwrites value properties on the target', function() {
    expect(JSON.stringify(assignest({ a: 1 }, { a: 2 }))).
      toEqual(JSON.stringify({ a: 2 }));
  });

  it('adds new value properties on the target', function() {
    expect(JSON.stringify(assignest({ a: 1 }, { b: 2 }))).
      toEqual(JSON.stringify({ a: 1, b: 2 }));
  });

  it('overwrites reference properties on the target', function() {
    expect(JSON.stringify(assignest({ a: { x: 3 } }, { a: { x: 4 } }))).
      toEqual(JSON.stringify({ a: { x: 4 } }));
  });

  it('adds new properties to the target', function() {
    expect(JSON.stringify(assignest({ a: { x: 3 } }, { b: { y: 5 } }))).
      toEqual(JSON.stringify({ a: { x: 3 }, b: { y: 5 } }));
  });

  it('adds new properties on reference properties', function() {
    expect(JSON.stringify(assignest({ a: { x: 3 } }, { a: { y: 5 } }))).
      toEqual(JSON.stringify({ a: { x: 3, y: 5 } }));
  });

  it('errors if the target is not an object', function() {
    let trial = function() {JSON.stringify(assignest(5, { a: { y: 5 } }))};
    expect(trial).
      toThrowError(TypeError, 'Target needs to be an object.');
  });

  it('errors if a source is not an object', function() {
    let trial = function() {JSON.stringify(assignest({ a: { y: 5 } }, 8))};
    expect(trial).
      toThrowError(TypeError, /All sources need to be objects./);
  });
});
