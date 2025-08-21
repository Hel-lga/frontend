let num1 = 5;
let num2 = 7;
let res = 1;
console.log('num1=' + num1, typeof (num1));
console.log('num2=' + num2, typeof (num2));

console.log(num1 ** num2);

for (let i = 0; i < num2; i++) {
    res *= num1;

}
console.log(`${num1} ^ ${num2} = ${res}`, typeof (num1), typeof (num2), typeof (res));

if (num1 ** num2 == res) {
    console.log(`${num1} ^ ${num2} = ${res} -> true`)
}else{
    console.log(`${num1} ^ ${num2} = ${res} -> false`)
}