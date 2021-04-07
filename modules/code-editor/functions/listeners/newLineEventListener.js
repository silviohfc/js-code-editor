function newLineEventListener(editor, linesWrapper) {
  editor.addEventListener('keydown', event => {
    const key = event.which || event.keyCode

    if (key === 13) {
      const lastLineValue = Number(linesWrapper.lastElementChild.textContent)
      const nextLineSpan = document.createElement("span")

      nextLineSpan.innerHTML = lastLineValue + 1
      
      linesWrapper.appendChild(nextLineSpan)
    }
  })
}

export { newLineEventListener }