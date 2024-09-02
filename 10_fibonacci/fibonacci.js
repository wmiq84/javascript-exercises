const fibonacci = function(count) {

    if (typeof count == "string") {
        count = parseInt(count);
    } if (count == 0) {
        return 0;
    } else if (count < 0) {
        return "OOPS";
    }


    const array = [1, 1];
    for (let i = 2; i < count; i++) {
        const next = array[i - 2] + array[i - 1];
        array.push(next);
    }
    return array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
