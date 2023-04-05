function genration(number, charat) {
    switch (number) {
        case -3: if (charat == "f") {
            console.log("great grandfather");
        } else if (charat == "m") {
            console.log("great grandmother");
        } else {
            console.log("not valid char")
        }
            break;
        case -2: if (charat == "f") {
            console.log("grandfather");
        } else if (charat == "m") {
            console.log("grandmother");
        } else {
            console.log("not valid char")
        }
            break;
        case -1: if (charat == "f") {
            console.log("father");
        } else if (charat == "m") {
            console.log("mother");
        } else {
            console.log("not valid char")
        }
            break;
        case 0: if (charat == "f") {
            console.log("me");
        } else if (charat == "m") {
            console.log("me");
        } else {
            console.log("not valid char")
        }
            break;

        case 1: if (charat == "f") {
            console.log("son");
        } else if (charat == "m") {
            console.log("dauter");
        } else {
            console.log("not valid char")
        }
            break;
        case 2: if (charat == "f") {
            console.log("grand son");
        } else if (charat == "m") {
            console.log("grand daugter");
        } else {
            console.log("not valid char")
        }
            break;
        case 3: if (charat == "f") {
            console.log("great grandson");
        } else if (charat == "m") {
            console.log("great granddaugter");
        } else {
            console.log("not valid char")
        }
            break;
        default:
            console.log("not valid number")
            break;
    }
}
genration(-3, "f")