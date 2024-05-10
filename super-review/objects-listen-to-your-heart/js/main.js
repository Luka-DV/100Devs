//Create a stopwatch object that has four properties and three methods


const stopwatch = {};

stopwatch.color = "black";
stopwatch["shape"] = "round";
stopwatch.brand = "nike";
stopwatch["number of functions"] = 6;

stopwatch.startTimer = function() {
    console.log("stopwatch timer started");
    stopwatch.startTime = new Date().getTime();
}

stopwatch.stopTimer = function() {
    console.log("timer stopped");
    stopwatch.stopTime = new Date().getTime();
}

stopwatch.showTime = function() {
    console.log("time elapsed: ");
    console.log((stopwatch.stopTime - stopwatch.startTime)/1000, "seconds");
    console.log(this.color);
}

console.log(stopwatch);