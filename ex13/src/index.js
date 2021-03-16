function inverseWhile() {

    var fiveNumbers = "";
    var i = 5;

    while (i >= 0) {


        if (i == 0) {


            fiveNumbers = fiveNumbers + i;

        } else {

            fiveNumbers = fiveNumbers + i + ",";

        }
        i--;
    }

    return fiveNumbers;
}

console.log(inverseWhile());

module.exports = inverseWhile;