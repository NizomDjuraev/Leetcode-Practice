/**
 * @param {string[]} strs
 * @return {string[][]}
 */



var groupAnagrams = function (strs) {
    if (strs.length == 0) {
        return [[""]];
    }
    if (strs.length == 1) {
        return [[strs[0]]];
    }
    let outArr = [];
    let finArr = [];
    for (i = 0; i < strs.length; i++) {
        let arr = [];
        for (j = 0; j < strs[i].length; j++) {
            arr.push(strs[i][j]);
        }
        outArr.push(arr.sort().join(''));
    }
    let used = Array(strs.length).fill(false); // To avoid duplicates
    for (n = 0; n < outArr.length; n++) {
        if (used[n]) continue; // Skip if already processed
        let innerArr = [strs[n]]; // Push the original string
        for (m = n + 1; m < outArr.length; m++) {
            if (outArr[n] === outArr[m]) {
                innerArr.push(strs[m]); // Push the original string
                used[m] = true; // Mark as processed
            }
        }
        finArr.push(innerArr);
    }
    return finArr;
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
