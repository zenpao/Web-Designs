//Extract characters

var tweet = prompt("Tell me about yourself in 140 characters");
var maxedOut = 140;
var tweetUnder140 = tweet.slice(0,140);

console.log(tweetUnder140);
console.log(tweet.length + " characters entered. | " + (maxedOut-tweet.length) + " characters remaining.");

