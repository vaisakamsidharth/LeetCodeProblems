/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if(n%2 == 0){
        return n
    }return 2*n
};

smallestEvenMultiple(5)
smallestEvenMultiple(6)