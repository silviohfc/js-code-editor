function backspaceEventListener(editor, linesWrapper) {
  editor.addEventListener('keyup', event => {
    const key = event.which || event.keyCode

    if (key === 8) { // Backspace
      const textLines = editor.value.split("\n").length;
      const wrapperLines = linesWrapper.childElementCount

      for (let i = wrapperLines; i > textLines; i--) {
        if (i === 1) break
        linesWrapper.removeChild(linesWrapper.lastElementChild)
      }
      
    }
  })
}

export { backspaceEventListener }