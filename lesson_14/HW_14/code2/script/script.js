const arrNumAndStr1 = [1, "jo", 5, "you", "man"];
const arrNumAndStr2 = [3, "hey", 9, "qwe", "ewq"];
const arrNumAndStr3 = [7, "hjk", 11, "msdfy", "yhert"];

const arrUnicum = [8, 6, "hgf", arrNumAndStr1, 12, arrNumAndStr2, "klo", arrNumAndStr3];






console.log(`arrNumAndStr1 = ${arrNumAndStr1}`);
console.log(`arrNumAndStr2 = ${arrNumAndStr2}`);
console.log(`arrNumAndStr3 = ${arrNumAndStr3}`);
console.log(`arrUnicum = ${arrUnicum}`);
console.log(`masterOfArrays(arrUnicum) = ${masterOfArrays(arrUnicum)}`);






function masterOfArrays(arrUnicum) {
    const result = [];
    for (const element of arrUnicum) {
        if (typeof (element) === "string") {
            result.push(element);
        }
        if (Array.isArray(element)) {
            masterOfArrays(element);
            result.push(masterOfArrays(element));
        }

    } return result;
}




