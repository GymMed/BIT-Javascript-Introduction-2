let eightResultsDom = document.querySelector("#eight-results");
let eightButtonDom = document.querySelector("#eight-submit-btn");

eightButtonDom.addEventListener("click", function () {
    startEightTask();
});

function startEightTask() {
    let eighthValueFirst = rand(0, 4);
    let eighthValueSecond = rand(0, 4);

    let eighthResult = divideLarger(eighthValueFirst, eighthValueSecond);
    console.log(eighthValueFirst, eighthValueSecond, eighthResult);
    eightResultsDom.innerHTML =
        "First Number: " +
        eighthValueFirst +
        "<br>" +
        "Second Number: " +
        eighthValueSecond +
        "<br>" +
        "Result is: " +
        eighthResult;

    if (eightResultsDom.classList.contains("hidden"))
        eightResultsDom.classList.remove("hidden");
}

function divideLarger(first, second) {
    let result = 0;

    if (first === 0 || second === 0) return result.toFixed(2);

    let larger, smaller;

    if (second > first) {
        larger = second;
        smaller = first;
    } else {
        larger = first;
        smaller = second;
    }

    result = larger / smaller;
    return result.toFixed(2);
}
