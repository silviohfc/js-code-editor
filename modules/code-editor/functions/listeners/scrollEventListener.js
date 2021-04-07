function scrollEventListener(editor, linesWrapper) {
  editor.addEventListener("scroll", () => {
    const top = editor.scrollTop

    linesWrapper.scrollTop = top
  })
}

export { scrollEventListener }