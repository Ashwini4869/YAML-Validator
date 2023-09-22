require.config({
  paths: { vs: "https://unpkg.com/monaco-editor@latest/min/vs" },
});

require(["vs/editor/editor.main"], function () {
  var editor = monaco.editor.create(document.getElementById("container"), {
    value: 'function hello() {\n\talert("Hello, Monaco!")\n}',
    language: "javascript",
  });
});
