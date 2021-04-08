import { variablesHighlight } from './variables.js'

class SyntaxHighlight {
  static execute(editor) {
    variablesHighlight(editor)
  }
}

export { SyntaxHighlight }