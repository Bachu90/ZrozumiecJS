console.log("\n-->isEVEN<<--\n");

function isEven(number) {
    if (number == 0) return true;
    else if (number == 1) return false;
    else {
        if (number < 0) {
            return isEven(number + 2);
        } else {
            return isEven(number - 2);
        }

    }
}

console.log(isEven(8));
console.log(isEven(-1));