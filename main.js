const CHARACTER_LIMIT = 500;

const convertClicked = () => {
  const textInput = document.getElementById("text-input");
  const text = textInput.value;

  textInput.value =
    "SingsNote " +
    text
      .replace(/\\*\n+/g, "\\\n")
      .replace(/SingsNote\s*/g, "")
      .replace(/\s{2,}/g, " ");

  textChanged();
};

const copyClicked = () => {
  var copyText = document.getElementById("text-input");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
};

const textChanged = () => {
  const textInput = document.getElementById("text-input");
  const counterElement = document.getElementById("counter");
  const overLimitElement = document.getElementById("over-limit");

  const characterCount = textInput.value.length;

  counterElement.innerHTML = characterCount;
  if (characterCount > CHARACTER_LIMIT) {
    counterElement.classList.add("danger");
    overLimitElement.hidden = false;
  } else {
    counterElement.classList.remove("danger");
    overLimitElement.hidden = true;
  }
};

textChanged();

const maxElement = document.getElementById("max");
maxElement.innerHTML = CHARACTER_LIMIT;
