var distance = require('./delete-distance');

describe('compare', function() {

  //common string is "plastic"
  it('identical strings', function() {
    expect(distance.compare('plastic', 'plastic')).toEqual(0);
  });

  //common string is ""
  it('wholly incompatible strings', function() {
    expect(distance.compare('tea', 'drip')).toEqual(7);
  });

  //common string is "late"
  it('string and substring', function() {
    expect(distance.compare('percolate', 'late')).toEqual(5);
  });

  //common string is "cola"
  it('more complicated substring', function() {
    expect(distance.compare('percolate', 'cola')).toEqual(5);
  });

  //common string is "coat"
  it('even more complicated substring', function() {
    expect(distance.compare('percolate', 'coat')).toEqual(5);
  });

  //common string is "ire"
  it('different string and substring', function() {
    expect(distance.compare('piledriver', 'ire')).toEqual(7);
  });

  //common string is "ire"
  it('commutativity', function() {
    expect(distance.compare('ire', 'piledriver')).toEqual(7);
  });

  //common string is "colate"
  it('common substring', function() {
    expect(distance.compare('percolate', 'chocolate')).toEqual(6);
  });

  //common string is "ork"
  it('common substring in different locations', function() {
    expect(distance.compare('doorknob', 'forked')).toEqual(8);
  });

  //common string is "poi"
  it('substring with chaff between its characters', function() {
    expect(distance.compare('polarized', 'poking')).toEqual(9);
  });

});
