let str = 'Mumbai is capital of maha'
let arr = []
let nestr = str.split(" ")
for (let i = 0; i < 6 - 1; i++) {
    let reve = nestr[i].split("")
    let revrse = reve.reverse()
    let joinarr = revrse.join("")
    arr.push(joinarr)
    console.log(joinarr);
}
console.log(arr.join(" "));


