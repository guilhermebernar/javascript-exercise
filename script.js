function add(num1, num2){
    let resultSom = 0
    return num1 + num2
}
//console.log(add(2,4))

function multiply(num1, num2){
    let total = 0
    for(let i=0; i<num2 ; i++){
        total = add(total, num1)
    } return total

}
//console.log(multiply(2,4))

function power(x , n){
    let total = x
    let sum = 0
    for (let i=1 ; i<= n ; i++){
        sum = multiply(total, x)
        total = sum
    } return total
}
//console.log(power(3,4))

function factorial(y){
    let total = 1
    for (let i = 1; i <= y; i++){
        total = multiply(i, total)
    } return total

}
console.log(factorial(5))