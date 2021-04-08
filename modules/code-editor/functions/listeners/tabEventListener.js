function tabEventListener(editor, linesWrapper) {
  editor.addEventListener('keydown', event => {
    const key = event.which || event.keyCode
    
    if (key === 9) { // Tab
      event.preventDefault()

      const editorView = editor.ownerDocument.defaultView;
      const selection = editorView.getSelection();
      const range = selection.getRangeAt(0);

      const tabNode = document.createTextNode("\u00a0\u00a0");
      range.insertNode(tabNode);

      range.setStartAfter(tabNode);
      range.setEndAfter(tabNode); 
      selection.removeAllRanges();
      selection.addRange(range);
    }
  })
}

export { tabEventListener }