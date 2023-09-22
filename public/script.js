require.config({
  paths: { vs: "https://unpkg.com/monaco-editor@latest/min/vs" },
});

require(["vs/editor/editor.main"], function () {
  var editor = monaco.editor.create(document.getElementById("container"), {
    value: "Enter YAML Code to Validate",
    language: "YAML",
    theme: "vs-dark",
    fontSize: 14,
    fontFamily: "Arial,sans-serif",
    wordWrap: "on",
    automaticLayout: true,
    minimap: { enabled: false },
    readOnly: false,
  });
});

require(["vs/editor/editor.main"], function () {
  var editor2 = monaco.editor.create(document.getElementById("container2"), {
    value: "Output of the Code",
    language: "YAML",
    theme: "vs-dark",
    readOnly: true,
    fontSize: 14,
    fontFamily: "Arial,sans-serif",
    wordWrap: "on",
    automaticLayout: true,
    minimap: { enabled: false },
    readOnly: false,
  });
});
