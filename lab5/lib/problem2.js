let positiveInt = [];
let min;
let max;
let avg;

list = readInput();

function readInput() {
    let n = prompt("Enter an integer (a negative to quit) : ");
    if (n > 0 && Number.isInteger(Number(n))) {
        positiveInt.push(n);
        readInput();
    } else if (n < 0 && Number.isInteger(Number(n))) {
        displayStats(positiveInt);
    } else {
        readInput();
    }
}

function displayStats(list) {
    min = Math.min(...list);
    max = Math.max(...list);
    avg = list.reduce((a, b) => Number(a) + Number(b), 0) / list.length;

    list.length == 0 ? alert("for the list is empty, the average is 0, the minimum is 0, and the maximum is 0") : alert("for the list " + list.join(",") + ", the average is " + avg.toFixed(2) + ", the minimum is " + min + ", and the maximum is " + max);
}