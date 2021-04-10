import { snippets, showSnippets } from './snippets.js'

const editor = setEditor()

class CodeEditor {
  static initialize() {
    setSnippetsShortcut()
  }
}

function setSnippetsShortcut() {
  editor.setOption('extraKeys', {
    'Cmd-Space': function() {
      showSnippets(editor)
    },
    'Ctrl-Space': function() {
      showSnippets(editor)
    }
  })
}

function setEditor() {
  return CodeMirror.fromTextArea(document.querySelector('.editor'), {
    mode: 'javascript',
    theme: 'monokai',
    lineNumbers: true,
    tabSize: 2,
    showCursorWhenSelecting: true,
    styleActiveLine: true,
    autoCloseBrackets: true
  })
}

export { CodeEditor }