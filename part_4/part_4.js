/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log('PART 4');

const isABalancedString = () => {
  // WRITE YOUR CODE BELOW THIS LINE
  let val = s.split("")
  let is = "[{(";
  let are = "]})";
  let stack = [];

  for (let i in val) {
    if (is.includes(val[i] && !(i == (val.length - 1)))) {
      stack.push(val[i]);
      continue;
    }

    if (are.includes(val[i]) && are.indexOf(val[i]) == is.indexOf(stack.slice(-1)[0])) {
      stack.pop();
    } else {
      return "NO";
    }

    if (i == (val.length - 1)) {
      if (!stack.length) {
        return "Yes";
      } else {
        return "No";
      }
    }
  }
};

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
