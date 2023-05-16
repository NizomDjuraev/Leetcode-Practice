/**
 * @param {string} s
 * @return {boolean}
 */

//iterate and check if there are sets of opening and closing parentheses, else return false
var isValid = function(s) {
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        var char = s[i];

        if (char === '(' || char === '{' || char === '[') { // if the character is an opening bracket
            stack.push(char);
        } else { // if the character is a closing bracket
            var last = stack.pop(); // pop the last opening bracket from the stack
            if ((char === ')' && last !== '(') ||
                (char === '}' && last !== '{') ||
                (char === ']' && last !== '[')) {
                return false;
            }
        }
    }

    return stack.length === 0; // if the stack is empty, then it's valid
};