let tenthResultsDom = document.querySelector("#tenth-results");
let tenthButtonDom = document.querySelector("#tenth-submit-btn");

tenthButtonDom.addEventListener("click", function () {
    startTenthTask();
});

function startTenthTask() {
    const generateLetters = 3;
    const randomLatinString = generateRandomLatinString(generateLetters);
    console.log(randomLatinString);

    tenthResultsDom.textContent =
        "Generated " +
        generateLetters +
        ' letters: "' +
        randomLatinString +
        '"';

    if (tenthResultsDom.classList.contains("hidden"))
        tenthResultsDom.classList.remove("hidden");
}

function generateRandomLatinString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let currentChar = 0; currentChar < length; currentChar++) {
        //alternative rand(0, characters.length - 1) max is inclusive!
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}
