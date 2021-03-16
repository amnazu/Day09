function myDoWhile() {

    var myNumbers = "";
    var i = 0

    do {

        myNumbers = myNumbers + i + ", ";

        i++;

    } while (i < 9);

    myNumbers = myNumbers + i;

    return myNumbers;
}

console.log(myDoWhile());

module.exports = myDoWhile;