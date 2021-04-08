import { SyntaxHighlight } from '../syntax-highlight/index.js'

function typingEventListener(editor, linesWrapper) {
  editor.addEventListener('keyup', event => {
    SyntaxHighlight.execute(editor)
  })
}

export { typingEventListener }