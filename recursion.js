function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if (!arr.length) return initial;
    var next = arr.shift(); //poping first element from array
    var reduced = fn(initial, next, 0, arr); //already banay hue function ko call kara ha
    return reduce(arr, fn, reduced); //recur;
    //jab tk chalay ga jab tk array me elments hain or reduced element return karay ga in form of object
}

module.exports = reduce