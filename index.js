var reverse = function(x) {
    const reverseDigits = parseInt(x.toString().split("").reverse().join(""))

    if (x >= 0 && reverseDigits < 2147483648) {
        return reverseDigits
    } else if (x < 0 && (reverseDigits * -1) > -2147483648){
        return reverseDigits * -1 
    } else {
        return 0
    }
}

console.log(reverse(-123))
console.log(reverse(1534236469))
console.log(reverse(-2147483648))