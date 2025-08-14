/**
 * Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
function smallName(names) {
    let lengthN = names[0];
    for (const name of names) {
        if (name.length < lengthN.length) {
            lengthN = name;
        }
    }
    return lengthN;
}
console.log(smallName(heights2));
