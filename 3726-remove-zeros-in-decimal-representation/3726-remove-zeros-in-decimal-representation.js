/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    copy = "";
    str = String(n)
    for(i=0;i<str.length;i++){
        if(str[i]!=0){
            copy+=str[i]
        }
    }return Number(copy)
};