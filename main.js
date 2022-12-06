const convertClicked = () => {
  const textInput = document.getElementById("text-input")
  const text = textInput.value;

  textInput.value = "SingsNote " + text
                      .replace(/\\*\n+/g, "\\\n")
                      .replace(/SingsNote\s*/g, "")
                      .replace(/\s{2,}/g, " ")

}

const copyClicked = () => {
  var copyText = document.getElementById("text-input");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}
