const prompt = require("prompt-sync")({sigint:true});
var input = prompt("Compose your tweet: \t")

var maxCount = 148;

var balanceChar = maxCount - input.length;

console.log("You have written "+ input.length + " and have "+balanceChar + " to post.")