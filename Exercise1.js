// Exercise # 1 : Guess the Number

let randNum = Math.floor(Math.random() * 100);
let chances = 0;
let num;

while (chances < 10)
 {
    num = prompt("Guess the Number?");
    num = Number.parseInt(num);
    if (num != randNum) {
        chances++;
        if (randNum >= 0 && randNum <= 10) {
            console.log("Number is between 0 & 10");
        }
        else if (randNum >= 11 && randNum <= 20) {
            console.log("Number is between 11 & 20");
        }
        else if (randNum >= 21 && randNum <= 30) {
            console.log("Number is between 21 & 30");
        }
        else if (randNum >= 31 && randNum <= 40) {
            console.log("Number is between 31 & 40");
        }
        else if (randNum >= 41 && randNum <= 50) {
            console.log("Number is between 41 & 50");
        }
        else if (randNum >= 51 && randNum <= 60) {
            console.log("Number is between 51 & 60");
        }
        else if (randNum >= 61 && randNum <= 70) {
            console.log("Number is between 61 & 70");
        }
        else if (randNum >= 71 && randNum <= 80) {
            console.log("Number is between 71 & 80");
        }
        else if (randNum >= 81 && randNum <= 90) {
            console.log("Number is between 81 & 90");
        }
        else if (randNum >= 91 && randNum <= 100) {
            console.log("Number is between 91 & 100");
        }
    }

    else {
        alert("Correct Number");
        console.log("Random Generate Number \n" + randNum);
        console.log("Your Guess Number \n" + num);
        console.log("Number of Attempt Chances \n" + chances);
        console.log("Congratulations you guess the Right number \n");
        break;
    }

}


console.log("Random Generate Number \n" + randNum);
console.log("Your Guess Number \n" + num);
console.log("Number of Attempt Chances \n" + chances);
console.log("Try Again");





