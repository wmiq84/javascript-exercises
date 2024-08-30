const removeFromArray = function(array, ...numbers) {
    for (const number of numbers) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === number) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// const removeFromArray = function (array, ...args) {
//     const newArray = [];
//     array.forEach(function(item) { //calls function for each element in each array
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
//     return newArray;
//   };
  
//   // A simpler, but more advanced way to do it is to use the 'filter' function,
//   // which basically does what we did with the forEach above.
  
//   // const removeFromArray = function(array, ...args) {
//   //   return array.filter(function(val) { return !args.includes(val); })
//   // }
  
  module.exports = removeFromArray;

// Do not edit below this line
module.exports = removeFromArray;
