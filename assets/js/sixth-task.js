let sentance = "Once upon a time in hollywood";
let sentanceDom = document.querySelector("#sentance");
let sixthResultsDom = document.querySelector("#sixth-results");
let sixthButtonDom = document.querySelector("#sixth-submit-btn");

sentanceDom.value = sentance;
sixthButtonDom.addEventListener("click", function () {
    sixthTask();
});

function sixthTask() {
    sentance = sentanceDom.value;
    console.log(sentance);

    let changedSentance = sentance.replaceAll("O", "*");
    changedSentance = changedSentance.replaceAll("o", "*");
    console.log(changedSentance);

    sixthResultsDom.innerHTML =
        "Original: " + sentance + "<br>Changed: " + changedSentance;

    if (sixthResultsDom.classList.contains("hidden"))
        sixthResultsDom.classList.remove("hidden");
}
