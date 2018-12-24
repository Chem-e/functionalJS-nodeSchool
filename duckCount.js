    function duckCount() {
        // SOLUTION GOES HERE
        var callArguments = Array.prototype.slice.call(arguments);
        return callArguments.filter(function(arg) {
            return Object.prototype.hasOwnProperty.call(arg, 'quack')
        }).length
    }



    module.exports = duckCount