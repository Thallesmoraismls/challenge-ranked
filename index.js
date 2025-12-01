const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How many victories do you have: ", function (victories) {
    rl.question("How many losses do you have: ", function (losses) {

        victories = parseInt(victories);
        losses = parseInt(losses);

        total = victories - losses;
        let level = "";

        if (total <= 10) {
            level = "Iron";
        } else if (total >= 11 && total <= 20) {
            level = "Bronze";
        } else if (total >= 21 && total <= 50) {
            level = "Silver";
        } else if (total >= 51 && total <= 80) {
            level = "Gold";
        } else if (total >= 81 && total <= 90) {
            level = "Diamond";
        } else if (total >= 91 && total <= 100) {
            level = "Legendary";
        } else if (total >= 101) {
            level = "Immortal";
        }


        console.log("The Hero has a balance of", total, "is at the level of", level);

        rl.close();
    });
});