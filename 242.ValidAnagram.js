/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//store string chars in an array and sort it
//join the sorted arrays and compare the two inputs
//should be equal to one another if they're anagrams
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false
    }
    let sArr = [];
    let tArr = [];
    for (i = 0; i < s.length; i++) {
        sArr.push(s[i]);
        tArr.push(t[i]);
    }
    return sArr.sort().join('') == tArr.sort().join('');
};