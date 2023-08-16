document.addEventListener("keydown", function (event) {
    let key = event.keyCode;
    if (key == 48 || key == 96) {
        document.getElementById("zero").click();
    } else if (key == 49 || key == 97) {
        document.getElementById("one").click();
    } else if (key == 50 || key == 98) {
        document.getElementById("two").click();
    } else if (key == 51 || key == 99) {
        document.getElementById("three").click();
    } else if (key == 52 || key == 100) {
        document.getElementById("four").click();
    } else if (key == 53 || key == 101) {
        document.getElementById("five").click();
    } else if (key == 54 || key == 102) {
        document.getElementById("six").click();
    } else if (key == 55 || key == 103) {
        document.getElementById("seven").click();
    } else if (key == 56 || key == 104) {
        document.getElementById("eight").click();
    } else if (key == 57 || key == 105) {
        document.getElementById("nine").click();
    } else if (key == 106) {
        document.getElementById("into").click();
    } else if (key == 107 || key == 187) {
        document.getElementById("plus").click();
    } else if (key == 109 || key == 189) {
        document.getElementById("minus").click();
    } else if (key == 67) {
        document.getElementById("clean").click();
    } else if (key == 8) {
        document.getElementById("backslash").click();
    } else if (key == 190 || key == 110) {
        document.getElementById("point").click();
    } else if (key == 13) {
        document.getElementById("equal").click();
    } else if (key == 191 || key == 111) {
        document.getElementById("divide").click();
    }
});