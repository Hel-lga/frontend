const numbersAndStrings = ["boo", 1, "he", 3, "llo", 5, "all", 7, "from", 11, "js"];
console.log(numbersAndStrings);
console.log(newArrayOfNumbersAndStrings(numbersAndStrings));









function newArrayOfNumbersAndStrings(numbersAndStrings) {
    const numbersAndStringsCopy = [];
    for (const element of numbersAndStrings) {
        
        if (typeof(element) === "string") {
            numbersAndStringsCopy.push(element);
                }
    }
return numbersAndStringsCopy;
}