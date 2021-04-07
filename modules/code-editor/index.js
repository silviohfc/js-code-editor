import { newLineEventListener } from './functions/listeners/newLineEventListener.js';
import { scrollEventListener } from './functions/listeners/scrollEventListener.js'

class CodeEditor {
  static initialize() {
    this.editor = document.querySelector(".editor")
    this.linesWrapper = document.querySelector(".lines-wrapper")
    
    this.addEventListeners()
  }

  static addEventListeners() {
    newLineEventListener(this.editor, this.linesWrapper)
    scrollEventListener(this.editor, this.linesWrapper)
  }
}

export { CodeEditor }