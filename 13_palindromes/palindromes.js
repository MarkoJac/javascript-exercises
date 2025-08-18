const palindromes = function (string) {
    let forwards = string.toLowerCase().replace(/[\W\s]/g, "");
    let backwards = forwards.split("").reverse().join("");

    if (forwards === backwards ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
