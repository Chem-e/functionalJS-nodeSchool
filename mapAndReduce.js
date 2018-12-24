(function() {
    var map;

    map = function(arr, iter) {
        var reducer;
        reducer = function(prev, next, i, arr) {
            return prev.concat([iter(next)]);
        };
        return arr.reduce(reducer, []);
    };

    module.exports = map;

}).call(this);