const idOne = document.getElementById("contact-user-name-id");
const idTwo = document.getElementById("contact-user-name-id-repeat");
const message = document.getElementById("contact-message");

function FailSameness() {
    message.classList.add("message-alert");
    message.innerHTML = "The submitted user ids do not match!"
    idTwo.value = "";
    idOne.value = "";
    idOne.focus();
}

function PassSameness() {
    message.classList.remove("message-alert");
    message.innerHTML = "Your ids match.";
}

function BothHaveValues() {
    idOneValue = String(idOne.value);
    idTwoValue = String(idTwo.value);
    return idOneValue !== "" && idTwoValue !== "";
}

function ProcessFocusEvent() {
    if (BothHaveValues()) {
        if (idOneValue === idTwoValue) {
            PassSameness();
        } else {
            FailSameness();
        }
    }
}

idOne.onblur = ProcessFocusEvent;
idTwo.onblur = ProcessFocusEvent;

