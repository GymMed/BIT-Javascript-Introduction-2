let ninthResultsDom = document.querySelector("#ninth-results");
let ninthButtonDom = document.querySelector("#ninth-submit-btn");

ninthButtonDom.addEventListener("click", function () {
    startNinthTask();
});

function startNinthTask() {
    let ninthFirst = rand(0, 25);
    let ninthSecond = rand(0, 25);
    let ninthThird = rand(0, 25);
    let result = checkNinthTask(ninthFirst, ninthSecond, ninthThird);
    console.log(result, ninthFirst, ninthSecond, ninthThird);

    ninthResultsDom.innerHTML =
        "First Number: " +
        ninthFirst +
        "<br>" +
        "Second Number: " +
        ninthSecond +
        "<br>" +
        "Third Number: " +
        ninthThird +
        "<br>" +
        "Middle Number: " +
        result +
        "<br>";

    if (ninthResultsDom.classList.contains("hidden"))
        ninthResultsDom.classList.remove("hidden");
}

function checkNinthTask(ninthFirst, ninthSecond, ninthThird) {
    if (ninthFirst >= ninthSecond && ninthSecond >= ninthThird) {
        return ninthSecond;
    } else if (ninthThird >= ninthSecond && ninthSecond >= ninthFirst) {
        return ninthSecond;
    } else if (ninthSecond >= ninthFirst && ninthFirst >= ninthThird) {
        return ninthFirst;
    } else if (ninthThird >= ninthFirst && ninthFirst >= ninthSecond) {
        return ninthFirst;
    } else {
        return ninthThird;
    }
}
