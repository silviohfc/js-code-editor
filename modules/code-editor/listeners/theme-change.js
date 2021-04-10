const triggers = document.querySelectorAll('.editor-option')

function themeChange(editor) {
  for(const trigger of triggers) {
    const theme = trigger.id

    trigger.addEventListener('click', () => {
      editor.setOption('theme', theme)
    })
  }
}

export { themeChange }