var noOfChildren = 5;
var partnerName = "Debbie"
var geographicLocation = "Singapore"
var jobTitle = "Doctor"

function fortuneTelling(noOfChildren,partnerName,geographicLocation,jobTitle) {
    noOfChildren = 10;
    partnerName = "John"
    geographicLocation = "Singapore"
    jobTitle = "Doctor"
    result = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${noOfChildren} kids.`;
    return result;
}

var globalResult;

function addNumbers(num1, num2) {
    globalResult = num1 + num2;
    console.log("The global result is: " + globalResult);
}

addNumbers(5, 7);
console.log(globalResult);  // 12

function addNumbers(num1, num2) {
    var localResult = num1 + num2;
    console.log("The local result is: " + localResult);
}

addNumbers(5, 7);
console.log(localResult);  // ReferenceError


