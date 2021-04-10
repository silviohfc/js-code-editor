const snippets = [
  { text: 'const myVar = require("./path")', displayText: 'Javascript Require' },
  { text: 'function myFunc() {\n\tconsole.log("Hello World!")\n}', displayText: 'JavaScript Function' },
]

function showSnippets(editor) {
  CodeMirror.showHint(editor, function () {
    const cursor = editor.getCursor()
    const token = editor.getTokenAt(cursor)
    const start = token.start
    const end = cursor.ch
    const line = cursor.line
    const currentWord = token.string

    const list = snippets.filter(function (item) {
      return item.text.indexOf(currentWord) >= 0
    })

    return {
      list: list.length ? list : snippets,
      from: CodeMirror.Pos(line, start),
      to: CodeMirror.Pos(line, end)
    }
  }, { completeSingle: false })
}

export { snippets, showSnippets }