// const reverseString = function(string) {
//     let newString = '';
//     let lastIndex = string.length - 1;
//     for (let i = lastIndex; i >= 0; i--) {
//         newString += string[i];
//     }
//     return newString;
// };

const reverseString = function (string) {
    return string.split("").reverse().join("");
  };

// Better solution
  
// Do not edit below this line
module.exports = reverseString;
