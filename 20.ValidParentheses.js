/**
 * @param {string} s
 * @return {boolean}
 */

//iterate and check if there are sets of opening and closing parentheses, else return false
var isValid = function (s) {
    for (i = 0; i < s.length; i += 2) {
        if (s[i] == '(' && s[i + 1] == ')') {
            return true;
        } else if (s[i] == '{' && s[i + 1] == '}') {
            return true;
        } else if (s[i] == '[' && s[i + 1] == ']') {
            return true;
        } else {
            return false;
        }
    }
};