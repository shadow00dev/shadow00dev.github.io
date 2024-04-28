const button = document.getElementById("generaterandompassword");
const output = document.getElementById("output");
const lengthNum = document.getElementById("length");
const abc = document.getElementById("abc");
const ABC = document.getElementById("ABC");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
function validLength(window=false) {
    const width = 250
    if (lengthNum.value < 1) lengthNum.value = 1;
    if (lengthNum.value > 20 && output.offsetWidth < width) lengthNum.value = 20;
    if (lengthNum.value > 30 && output.offsetWidth > width) lengthNum.value = 30;
}
var key = "";
button.addEventListener("click",() => {
    var values = [Number(lengthNum.value), abc.checked, ABC.checked, numbers.checked, symbols.checked];
    key = passwords(values[0], 1, values[1], values[2], values[3], values[4])[0];
    while (profanityCleaner.isProfane(key)) {
        console.log("Password Generator: Bad word detected, regenerated.");
        key = passwords(values[0], 1, values[1], values[2], values[3], values[4])[0];
    }
    document.getElementById("output").value = key;
});
output.addEventListener("click",() => {
    if (key != "") {
        output.select();
        output.setSelectionRange(0, 100);
    }
});