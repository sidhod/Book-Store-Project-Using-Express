"use strict";

var str = 'Mumbai is capital of maha';
var arr = [];
var nestr = str.split(" ");
for (var i = 0; i < 6 - 1; i++) {
  var reve = nestr[i].split("");
  var revrse = reve.reverse();
  var joinarr = revrse.join("");
  arr.push(joinarr);
  console.log(joinarr);
}
console.log(arr.join(" "));