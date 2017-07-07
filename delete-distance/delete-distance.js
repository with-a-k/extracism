/*
The deletion distance between "" and any string of length l is l.
The deletion distance between "${same}a" and "${diff}a" is the deletion distance between same and diff.
The deletion distance between "${same}a" and "${diff}b" is the deletion distance between same and diff + 1.
Using these, we can generate a map of the distances between any two given strings' substrings and just return
the value in the far lower right.
*/

function arrayOfZeros(length) {
  var ours = [];
  for (var x = 0; x < length; x++) {
    ours.push(0);
  }
  return ours;
}

module.exports.compare = function(str1, str2) {
  var backup;
  if (str1.length < str2.length) {
    backup = str1;
    str1 = str2;
    str2 = backup;
  }

  var s1l = str1.length;
  var s2l = str2.length;
  var pastMem = arrayOfZeros(s2l+1);
  var presMem = arrayOfZeros(s2l+1);

  for (var i = 0; i <= s1l; i++) {
    for (var j = 0; j <= s2l; j++) {
      if (i === 0) {
        presMem[j] = j;
      } else if (j === 0) {
        presMem[j] = i;
      } else if (str1[i-1] === str2[j-1]) {
        presMem[j] = pastMem[j-1];
      } else {
        presMem[j] = 1 + Math.min(pastMem[j], presMem[j-1]);
      }
    }
    pastMem = presMem;
    presMem = arrayOfZeros(s2l+1);
  }
  return pastMem[s2l];
}
