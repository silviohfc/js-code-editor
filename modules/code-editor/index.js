import { newLineEventListener } from './functions/listeners/newLineEventListener.js';
import { scrollEventListener } from './functions/listeners/scrollEventListener.js'
import { backspaceEventListener } from './functions/listeners/backspaceEventListener.js'
import { tabEventListener } from './functions/listeners/tabEventListener.js'
import { typingEventListener } from './functions/listeners/typingEventListener.js'

class CodeEditor {
  static initialize() {
    this.editor = document.querySelector(".editor")
    this.linesWrapper = document.querySelector(".lines-wrapper")
    
    this.addEventListeners()
  }

  static addEventListeners() {
    newLineEventListener(this.editor, this.linesWrapper)
    scrollEventListener(this.editor, this.linesWrapper)
    backspaceEventListener(this.editor, this.linesWrapper)
    tabEventListener(this.editor, this.linesWrapper)
    typingEventListener(this.editor, this.linesWrapper)
  }
}

export { CodeEditor }