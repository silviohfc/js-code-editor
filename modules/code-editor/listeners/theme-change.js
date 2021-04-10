const triggers = document.querySelectorAll('.editor-option')
const footerLinks = document.querySelectorAll('.footer-link')

const footerColors = {
  dracula: "#FF79C6",
  monokai: "#F92672"
}

function themeChange(editor) {
  for(const trigger of triggers) {
    const theme = trigger.id

    trigger.addEventListener('click', () => {
      editor.setOption('theme', theme)

      footerLinks.forEach(link => link.style.color = footerColors[theme])
    })
  }
}

export { themeChange }