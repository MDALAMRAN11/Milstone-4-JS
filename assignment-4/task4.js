function isSame(arr1, arr2) {
    // You have to write your code here
    let answer = true;
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        answer = false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            answer = false;
        }
    }
    return answer;
}
// const array1 = [1, 4, 5];
// const array2 = { data: [2, 5, 6] };
// console.log(isSame(array1, array2));
