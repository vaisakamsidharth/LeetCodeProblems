/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let new_arr = []
    for (let i=1;i<=n;i++){
        if(i % 3===0 && i % 5===0){
            new_arr.push("FizzBuzz")
        }else if(i % 3===0){
            new_arr.push("Fizz")
        }else if(i % 5 ===0){
            new_arr.push("Buzz")
        }
        else{
            new_arr.push(i.toString())
        }
    }return new_arr
}
    
fizzBuzz(3)