const sumAll = function(min, max) {
    let sum = 0;
    if (min < 0 || max < 0) return "ERROR";
    else if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    else if (min > max) [min, max] = [max, min]
    for (let i = min; i <= max; i++) {
        sum += min;
        min++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
