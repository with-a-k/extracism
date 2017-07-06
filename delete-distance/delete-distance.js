//This solution is unfinished, but it addresses every test case
//except one ("percolate" vs "chocolate").

function sortStringsByLength(str1, str2) {
  if (str1.length > str2.length) {
    return [str2, str1];
  } else {
    return [str1, str2];
  }
}

/*
/Takes two arrays of characters and finds the longest string that can
/be made from characters the two have in common and in the same order.
/The first is expected to be shorter.
*/
function findCommonString(chars1, chars2) {
  var common = [];
  var check = chars2;
  chars1.forEach(function(char) {
    if (check.includes(char)) {
      common.push(char);
      check = chars2.slice(chars2.findIndex(function(inchar) {
        return inchar === char;
      }));
    }
  });
  console.log(`the common word is ${common.join('')}`);
  return common.join('');
}

module.exports.compare = function(str1, str2) {
  if (str1 === str2) {
    return 0;
  }
  var short = sortStringsByLength(str1, str2)[0].split('');
  var long = sortStringsByLength(str1, str2)[1].split('');
  var common = findCommonString(short, long);
  return (short.length - common.length) + (long.length - common.length);
}
