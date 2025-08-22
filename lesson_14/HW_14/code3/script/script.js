let input = prompt("Enter number: ")
let num = Number(input);
while (true) {
    
    if (!isFinite(num) || isNaN(num)) {
        console.log("Es is not number");
    } else {
        console.log(num);
    }break;
}

const arrOfNumbers = String(num).split('').map(Number);
console.log(arrOfNumbers);
