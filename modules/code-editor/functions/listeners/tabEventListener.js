function tabEventListener(editor, linesWrapper) {
  editor.addEventListener('keydown', event => {
    const key = event.which || event.keyCode
    
    if (key === 9) { // Tab
      event.preventDefault()

      const start = editor.selectionStart;
      const end = editor.selectionEnd;

      editor.value = editor.value.substring(0, start) + 
        "\t" + editor.value.substring(end);

      editor.selectionStart = editor.selectionEnd = start + 1;
    }
  })
}

export { tabEventListener }