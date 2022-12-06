const convertClicked = () => {
  const textInput = document.getElementById('text-input')
  const text = textInput.value;

  textInput.value = "SingsNote " + text
                      .replace(/\\*\n{2,}/g, "\\\n")
                      .replace(/SingsNote/g, "")
                      .replace(/\s{2,}/g, " ")

}
