function onlyCharacter(str) {
    // You have to write your code here
    if (typeof str === "object" || typeof str === "boolean") {
        return "Invalid";
    }
    let newString = str.toUpperCase().split("");
    let result = "";
    for (let str of newString) {
        if (str !== " ") {
            result += str;
        }
    }
    return result;
}
// console.log(onlyCharacter(true));
