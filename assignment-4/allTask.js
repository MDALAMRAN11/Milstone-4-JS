//problem-1
function totalFine(fare) {
    // You have to write your code here
    const sarCharge = fare * (20 / 100);
    const serviceCharge = 30;
    const totalCharge = fare + sarCharge + serviceCharge;
    if (fare <= 0 || typeof fare === "string") {
        return "Invalid";
    } else {
        return totalCharge;
    }
}
// console.log(totalFine("65"));

//problem-2
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

//problem-3
// const team2 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
// const team1 = { name: "France", foul: 10, cardY: 2, cardR: 1 };
function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }
    const team1 = player1.foul + player1.cardY + player1.cardR;
    const team2 = player2.foul + player2.cardY + player2.cardR;
    if (team1 < team2) {
        return player1.name;
    } else if (team1 > team2) {
        return player2.name;
    } else if (team1 === team2) {
        return "Tie";
    }
}
// console.log(bestTeam(team1, team2));

//problem-4
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

//problem-5
function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let pass = 0;
    let fails = 0;
    let sum = 0;
    for (let mark of marks) {
        sum = sum + mark;
        if (mark >= 100) {
            return "Invalid";
        } else if (mark < 40) {
            fails++;
        } else if (mark >= 40) {
            pass++;
        }
    }
    let average = sum / marks.length;
    let roundAverage = Math.round(average);
    if (marks.length === 0) {
        roundAverage = 0;
    }
    return { finalScore: roundAverage, pass: pass, fail: fails };
}
// let marks = [0];
// console.log(resultReport(marks));
