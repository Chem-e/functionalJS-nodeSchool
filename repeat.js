function repeat(operation, num) {
    function operation() {

    };
    for (var i = 0; i <= num; i++) {
        operation();
    }
}
module.exports = repeat;



// function repeat(operation, num) {
// if (num <= 0) return
// operation()
// return repeat(operation, --num)
//   }
// 
//   module.exports = repeat