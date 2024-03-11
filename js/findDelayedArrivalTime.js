var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
     let delayTime = arrivalTime + delayedTime;
     return delayTime >= 24 ? delayTime - 24 : delayTime;
};

// example

findDelayedArrivalTime(13, 11);
