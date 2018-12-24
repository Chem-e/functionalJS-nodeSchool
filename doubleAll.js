function doubleAll(numbers) {

    var result = numbers.map(i => {
        return i * 2;
    })
    return result;
}


module.exports = doubleAll;