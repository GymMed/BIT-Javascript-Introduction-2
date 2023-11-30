let seventhResultsDom = document.querySelector("#seventh-results");
let seventhButtonDom = document.querySelector("#seventh-submit-btn");

let totalValuesCounts = [];

seventhButtonDom.addEventListener("click", function () {
    totalValuesCounts = fillArrayWith(0, 2);

    let firstValue = getRandomValueForSeventhTask(0, 2);
    let secondValue = getRandomValueForSeventhTask(0, 2);
    let thirdValue = getRandomValueForSeventhTask(0, 2);
    let fourthValue = getRandomValueForSeventhTask(0, 2);

    console.log(
        totalValuesCounts,
        firstValue,
        secondValue,
        thirdValue,
        fourthValue
    );

    seventhResultsDom.innerHTML = getSeventhResultsString(totalValuesCounts);

    if (seventhResultsDom.classList.contains("hidden"))
        seventhResultsDom.classList.remove("hidden");
});

function getSeventhResultsString(array) {
    if (!Array.isArray(array)) return;

    let arrayLength = array.length;
    let arrayLengthMinusOne = arrayLength - 1;
    let output = "";

    for (
        let currentValue = 0;
        currentValue < arrayLengthMinusOne;
        currentValue++
    ) {
        output +=
            "Number: " +
            currentValue +
            " Got count: " +
            array[currentValue] +
            "<br>";
    }

    output +=
        "Number: " +
        arrayLengthMinusOne +
        " Got count: " +
        array[arrayLengthMinusOne];

    return output;
}

function getRandomValueForSeventhTask(min, max) {
    let value = rand(min, max);
    totalValuesCounts[value] += 1;
    return value;
}

function fillArrayWith(min, max) {
    let filledArray = [];
    let maxIncluded = max + 1;

    for (let currentValue = min; currentValue < maxIncluded; currentValue++) {
        filledArray[currentValue] = 0;
    }

    return filledArray;
}
