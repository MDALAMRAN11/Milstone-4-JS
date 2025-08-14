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
