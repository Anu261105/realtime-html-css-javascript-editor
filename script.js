// ============================================
// DOM ELEMENTS
// ============================================

const htmlTextarea =
  document.getElementById("htmlEditor");

const cssTextarea =
  document.getElementById("cssEditor");

const jsTextarea =
  document.getElementById("jsEditor");


const preview =
  document.getElementById("preview");

const workspace =
  document.getElementById("workspace");

const editorPanel =
  document.getElementById("editorPanel");

const previewPanel =
  document.getElementById("previewPanel");

const resizer =
  document.getElementById("resizer");


const runBtn =
  document.getElementById("runBtn");

const resetBtn =
  document.getElementById("resetBtn");

const downloadBtn =
  document.getElementById("downloadBtn");

const themeBtn =
  document.getElementById("themeBtn");

const autoRun =
  document.getElementById("autoRun");


const refreshBtn =
  document.getElementById("refreshBtn");

const newTabBtn =
  document.getElementById("newTabBtn");

const fullscreenBtn =
  document.getElementById("fullscreenBtn");


const consoleBtn =
  document.getElementById("consoleBtn");

const consolePanel =
  document.getElementById("consolePanel");

const consoleOutput =
  document.getElementById("consoleOutput");

const consoleCount =
  document.getElementById("consoleCount");

const clearConsoleBtn =
  document.getElementById("clearConsoleBtn");

const closeConsoleBtn =
  document.getElementById("closeConsoleBtn");


const cursorPosition =
  document.getElementById("cursorPosition");

const lineCount =
  document.getElementById("lineCount");

const charCount =
  document.getElementById("charCount");

const previewStatus =
  document.getElementById("previewStatus");

const saveStatus =
  document.getElementById("saveStatus");

const activeLanguage =
  document.getElementById("activeLanguage");


const editorTabs =
  document.querySelectorAll(".editor-tab");

const editorViews =
  document.querySelectorAll(".editor-view");



// ============================================
// DEFAULT HTML
// ============================================

const defaultHTML = `<main class="hero">

  <div class="card">

    <span class="badge">
      LIVEFORGE
    </span>

    <h1>
      Build. Preview. Create.
    </h1>

    <p>
      Edit HTML, CSS and JavaScript
      using the tabs on the left.
      Your result appears instantly here.
    </p>

    <button id="welcomeBtn">
      Try JavaScript
    </button>

  </div>

</main>`;



// ============================================
// DEFAULT CSS
// ============================================

const defaultCSS = `* {
  box-sizing: border-box;
}

body {
  margin: 0;

  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: 30px;

  font-family:
    Arial,
    sans-serif;

  background:
    linear-gradient(
      135deg,
      #0f172a,
      #312e81
    );

  color: white;
}

.hero {
  width: 100%;

  display: grid;
  place-items: center;
}

.card {
  width:
    min(90%, 620px);

  padding:
    50px;

  text-align:
    center;

  border-radius:
    24px;

  background:
    rgba(
      255,
      255,
      255,
      0.09
    );

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.16
    );

  box-shadow:
    0 25px 70px
    rgba(
      0,
      0,
      0,
      0.35
    );

  backdrop-filter:
    blur(12px);
}

.badge {
  display:
    inline-block;

  padding:
    7px 12px;

  margin-bottom:
    15px;

  border-radius:
    999px;

  background:
    rgba(
      124,
      92,
      255,
      0.25
    );

  color:
    #c4b5fd;

  font-size:
    11px;

  font-weight:
    bold;

  letter-spacing:
    1.5px;
}

h1 {
  margin:
    0 0 16px;

  font-size:
    clamp(
      34px,
      6vw,
      56px
    );

  line-height:
    1.05;
}

p {
  margin:
    0 auto;

  max-width:
    500px;

  color:
    #cbd5e1;

  line-height:
    1.7;

  font-size:
    16px;
}

button {
  margin-top:
    24px;

  padding:
    13px 24px;

  border:
    none;

  border-radius:
    11px;

  background:
    #7c5cff;

  color:
    white;

  font-size:
    15px;

  font-weight:
    bold;

  cursor:
    pointer;

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

button:hover {
  transform:
    translateY(-2px);

  background:
    #6948f5;
}`;



// ============================================
// DEFAULT JAVASCRIPT
// ============================================

const defaultJS = `const button =
  document.getElementById(
    "welcomeBtn"
  );

button.addEventListener(
  "click",
  function () {

    console.log(
      "Hello from LiveForge!"
    );

    alert(
      "JavaScript is working! 🚀"
    );

  }
);`;



// ============================================
// LOAD SAVED CONTENT
// ============================================

const savedHTML =
  localStorage.getItem(
    "liveforge-html"
  );

const savedCSS =
  localStorage.getItem(
    "liveforge-css"
  );

const savedJS =
  localStorage.getItem(
    "liveforge-js"
  );



// ============================================
// COMMON EDITOR OPTIONS
// ============================================

function commonOptions() {

  return {

    theme:
      "material-darker",

    lineNumbers:
      true,

    lineWrapping:
      false,

    autoCloseBrackets:
      true,

    matchBrackets:
      true,

    styleActiveLine:
      true,

    indentUnit:
      2,

    tabSize:
      2,

    indentWithTabs:
      false,

    foldGutter:
      true,

    gutters: [

      "CodeMirror-linenumbers",

      "CodeMirror-foldgutter"

    ]

  };

}



// ============================================
// CREATE HTML EDITOR
// ============================================

const htmlEditor =
  CodeMirror.fromTextArea(
    htmlTextarea,
    {

      ...commonOptions(),

      mode:
        "htmlmixed",

      autoCloseTags:
        true,

      matchTags:
        {
          bothTags: true
        }

    }
  );



// ============================================
// CREATE CSS EDITOR
// ============================================

const cssEditor =
  CodeMirror.fromTextArea(
    cssTextarea,
    {

      ...commonOptions(),

      mode:
        "css"

    }
  );



// ============================================
// CREATE JS EDITOR
// ============================================

const jsEditor =
  CodeMirror.fromTextArea(
    jsTextarea,
    {

      ...commonOptions(),

      mode:
        "javascript"

    }
  );



// ============================================
// SET INITIAL VALUES
// ============================================

htmlEditor.setValue(
  savedHTML !== null
    ? savedHTML
    : defaultHTML
);


cssEditor.setValue(
  savedCSS !== null
    ? savedCSS
    : defaultCSS
);


jsEditor.setValue(
  savedJS !== null
    ? savedJS
    : defaultJS
);



// ============================================
// EDITOR MAP
// ============================================

const editors = {

  html:
    htmlEditor,

  css:
    cssEditor,

  js:
    jsEditor

};


let activeEditorName =
  "html";



// ============================================
// ADD KEYBOARD SHORTCUTS
// ============================================

Object.values(editors)
  .forEach(
    function (editor) {

      editor.addKeyMap({

        "Ctrl-Enter":
          function () {

            runPreview();

          },

        "Cmd-Enter":
          function () {

            runPreview();

          },

        "Ctrl-S":
          function () {

            saveAllImmediately();

          },

        "Cmd-S":
          function () {

            saveAllImmediately();

          }

      });

    }
  );



// ============================================
// SWITCH EDITOR TAB
// ============================================

editorTabs.forEach(
  function (tab) {

    tab.addEventListener(
      "click",
      function () {

        const target =
          tab.dataset.editor;


        activeEditorName =
          target;


        // Remove active tab
        editorTabs.forEach(
          function (item) {

            item.classList.remove(
              "active"
            );

          }
        );


        // Activate clicked tab
        tab.classList.add(
          "active"
        );


        // Hide all editor views
        editorViews.forEach(
          function (view) {

            view.classList.remove(
              "active"
            );

          }
        );


        // Show correct editor
        document
          .getElementById(
            target + "EditorView"
          )
          .classList.add(
            "active"
          );


        // Update footer language
        activeLanguage.textContent =
          target === "js"
            ? "JavaScript"
            : target.toUpperCase();


        // Refresh CodeMirror
        setTimeout(
          function () {

            editors[target].refresh();

            editors[target].focus();

            updateStats();

            updateCursorPosition();

          },
          20
        );

      }
    );

  }
);



// ============================================
// ESCAPE HTML ATTRIBUTE
// ============================================

function escapeAttribute(value) {

  return String(value)
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "\"",
      "&quot;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    );

}



// ============================================
// BUILD COMPLETE DOCUMENT
// ============================================

function buildCompleteDocument(
  includeConsoleBridge = true
) {

  const html =
    htmlEditor.getValue();

  const css =
    cssEditor.getValue();

  const js =
    jsEditor.getValue();


  let consoleBridge =
    "";


  if (
    includeConsoleBridge
  ) {

    consoleBridge = `
<script>
(function () {

  function safeValue(value) {

    try {

      if (
        typeof value === "object"
      ) {

        return JSON.stringify(
          value,
          null,
          2
        );

      }

      return String(value);

    } catch (error) {

      return String(value);

    }

  }


  function send(
    type,
    args
  ) {

    window.parent.postMessage(
      {
        source:
          "liveforge-console",

        type:
          type,

        message:
          args
            .map(safeValue)
            .join(" ")
      },
      "*"
    );

  }


  [
    "log",
    "info",
    "warn",
    "error"
  ].forEach(
    function (type) {

      const original =
        console[type];

      console[type] =
        function (...args) {

          original.apply(
            console,
            args
          );

          send(
            type,
            args
          );

        };

    }
  );


  window.addEventListener(
    "error",
    function (event) {

      send(
        "error",
        [
          event.message +
          " at line " +
          event.lineno +
          ":" +
          event.colno
        ]
      );

    }
  );


  window.addEventListener(
    "unhandledrejection",
    function (event) {

      send(
        "error",
        [
          "Unhandled Promise Rejection:",
          event.reason
        ]
      );

    }
  );

})();
<\/script>`;

  }


  return `<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>LiveForge Preview</title>

  <style>
${css}
  </style>

</head>

<body>

${html}

${consoleBridge}

<script>
try {

${js}

} catch (error) {

  console.error(
    error.name + ": " +
    error.message
  );

}
<\/script>

</body>

</html>`;

}



// ============================================
// RUN PREVIEW
// ============================================

function runPreview() {

  previewStatus.textContent =
    "Updating...";

  previewStatus.style.color =
    "#ff9f43";


  clearConsole();


  preview.srcdoc =
    buildCompleteDocument(
      true
    );


  setTimeout(
    function () {

      previewStatus.textContent =
        "Live";

      previewStatus.style.color =
        "#35d07f";

    },
    250
  );

}



// ============================================
// AUTO RUN
// ============================================

let previewTimer;


function schedulePreview() {

  clearTimeout(
    previewTimer
  );


  previewTimer =
    setTimeout(
      function () {

        if (
          autoRun.checked
        ) {

          runPreview();

        }

      },
      400
    );

}



// ============================================
// SAVE
// ============================================

let saveTimer;


function scheduleSave() {

  clearTimeout(
    saveTimer
  );


  saveStatus.textContent =
    "Saving...";


  saveTimer =
    setTimeout(
      function () {

        saveAllImmediately();

      },
      300
    );

}



// ============================================
// SAVE IMMEDIATELY
// ============================================

function saveAllImmediately() {

  localStorage.setItem(
    "liveforge-html",
    htmlEditor.getValue()
  );


  localStorage.setItem(
    "liveforge-css",
    cssEditor.getValue()
  );


  localStorage.setItem(
    "liveforge-js",
    jsEditor.getValue()
  );


  saveStatus.textContent =
    "Saved locally";


  document
    .querySelectorAll(
      ".tab-change-dot"
    )
    .forEach(
      function (dot) {

        dot.classList.remove(
          "visible"
        );

      }
    );

}



// ============================================
// MARK CHANGED TAB
// ============================================

function markTabChanged(name) {

  const id =
    name === "js"
      ? "jsChangeDot"
      : name + "ChangeDot";


  const dot =
    document.getElementById(id);


  if (dot) {

    dot.classList.add(
      "visible"
    );

  }

}



// ============================================
// EDITOR CHANGE HANDLER
// ============================================

function handleEditorChange(name) {

  markTabChanged(name);

  scheduleSave();

  schedulePreview();

  if (
    activeEditorName === name
  ) {

    updateStats();

  }

}



// ============================================
// REGISTER CHANGE EVENTS
// ============================================

htmlEditor.on(
  "change",
  function () {

    handleEditorChange(
      "html"
    );

  }
);


cssEditor.on(
  "change",
  function () {

    handleEditorChange(
      "css"
    );

  }
);


jsEditor.on(
  "change",
  function () {

    handleEditorChange(
      "js"
    );

  }
);



// ============================================
// UPDATE STATS
// ============================================

function updateStats() {

  const editor =
    editors[activeEditorName];


  const code =
    editor.getValue();


  const lines =
    editor.lineCount();


  lineCount.textContent =
    lines +
    (
      lines === 1
        ? " line"
        : " lines"
    );


  charCount.textContent =
    code.length +
    " chars";

}



// ============================================
// CURSOR POSITION
// ============================================

function updateCursorPosition() {

  const editor =
    editors[activeEditorName];


  const cursor =
    editor.getCursor();


  cursorPosition.textContent =
    "Ln " +
    (cursor.line + 1) +
    ", Col " +
    (cursor.ch + 1);

}



// ============================================
// CURSOR EVENTS
// ============================================

Object.entries(editors)
  .forEach(
    function ([name, editor]) {

      editor.on(
        "cursorActivity",
        function () {

          if (
            activeEditorName === name
          ) {

            updateCursorPosition();

          }

        }
      );

    }
  );



// ============================================
// RUN BUTTON
// ============================================

runBtn.addEventListener(
  "click",
  function () {

    runPreview();

  }
);



// ============================================
// REFRESH BUTTON
// ============================================

refreshBtn.addEventListener(
  "click",
  function () {

    runPreview();

  }
);



// ============================================
// AUTO RUN CHECKBOX
// ============================================

autoRun.addEventListener(
  "change",
  function () {

    if (
      autoRun.checked
    ) {

      runPreview();

    }

  }
);



// ============================================
// RESET
// ============================================

resetBtn.addEventListener(
  "click",
  function () {

    const confirmed =
      confirm(
        "Reset HTML, CSS and JavaScript to starter code?"
      );


    if (
      !confirmed
    ) {

      return;

    }


    htmlEditor.setValue(
      defaultHTML
    );


    cssEditor.setValue(
      defaultCSS
    );


    jsEditor.setValue(
      defaultJS
    );


    saveAllImmediately();

    updateStats();

    updateCursorPosition();

    runPreview();

  }
);



// ============================================
// DOWNLOAD COMPLETE HTML
// ============================================

downloadBtn.addEventListener(
  "click",
  function () {

    const completeCode =
      buildCompleteDocument(
        false
      );


    const blob =
      new Blob(
        [completeCode],
        {
          type:
            "text/html;charset=utf-8"
        }
      );


    const fileURL =
      URL.createObjectURL(
        blob
      );


    const link =
      document.createElement(
        "a"
      );


    link.href =
      fileURL;


    link.download =
      "liveforge-project.html";


    document.body.appendChild(
      link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(
      fileURL
    );

  }
);



// ============================================
// OPEN PREVIEW IN NEW TAB
// ============================================

newTabBtn.addEventListener(
  "click",
  function () {

    const completeCode =
      buildCompleteDocument(
        false
      );


    const blob =
      new Blob(
        [completeCode],
        {
          type:
            "text/html;charset=utf-8"
        }
      );


    const url =
      URL.createObjectURL(
        blob
      );


    window.open(
      url,
      "_blank"
    );


    setTimeout(
      function () {

        URL.revokeObjectURL(
          url
        );

      },
      60000
    );

  }
);



// ============================================
// THEME
// ============================================

themeBtn.addEventListener(
  "click",
  function () {

    document.body.classList.toggle(
      "light-theme"
    );


    const isLight =
      document.body.classList.contains(
        "light-theme"
      );


    Object.values(editors)
      .forEach(
        function (editor) {

          editor.setOption(
            "theme",
            isLight
              ? "default"
              : "material-darker"
          );

        }
      );


    themeBtn.textContent =
      isLight
        ? "☾"
        : "☀";


    localStorage.setItem(
      "liveforge-theme",
      isLight
        ? "light"
        : "dark"
    );


    setTimeout(
      refreshAllEditors,
      50
    );

  }
);



// ============================================
// LOAD THEME
// ============================================

const savedTheme =
  localStorage.getItem(
    "liveforge-theme"
  );


if (
  savedTheme === "light"
) {

  document.body.classList.add(
    "light-theme"
  );


  Object.values(editors)
    .forEach(
      function (editor) {

        editor.setOption(
          "theme",
          "default"
        );

      }
    );


  themeBtn.textContent =
    "☾";

}



// ============================================
// FULLSCREEN
// ============================================

fullscreenBtn.addEventListener(
  "click",
  function () {

    previewPanel.classList.toggle(
      "fullscreen-preview"
    );


    const fullscreen =
      previewPanel.classList.contains(
        "fullscreen-preview"
      );


    fullscreenBtn.textContent =
      fullscreen
        ? "✕"
        : "⛶";

  }
);



// ============================================
// ESCAPE FULLSCREEN
// ============================================

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      previewPanel.classList.contains(
        "fullscreen-preview"
      )
    ) {

      previewPanel.classList.remove(
        "fullscreen-preview"
      );


      fullscreenBtn.textContent =
        "⛶";

    }

  }
);



// ============================================
// CONSOLE STATE
// ============================================

let consoleMessages =
  0;



// ============================================
// OPEN / CLOSE CONSOLE
// ============================================

function toggleConsole(
  forceOpen = null
) {

  let shouldOpen;


  if (
    forceOpen === null
  ) {

    shouldOpen =
      !consolePanel.classList.contains(
        "open"
      );

  } else {

    shouldOpen =
      forceOpen;

  }


  consolePanel.classList.toggle(
    "open",
    shouldOpen
  );


  consoleBtn.classList.toggle(
    "active",
    shouldOpen
  );

}



// ============================================
// CONSOLE BUTTONS
// ============================================

consoleBtn.addEventListener(
  "click",
  function () {

    toggleConsole();

  }
);


closeConsoleBtn.addEventListener(
  "click",
  function () {

    toggleConsole(
      false
    );

  }
);


clearConsoleBtn.addEventListener(
  "click",
  function () {

    clearConsole();

  }
);



// ============================================
// CLEAR CONSOLE
// ============================================

function clearConsole() {

  consoleMessages =
    0;


  consoleCount.textContent =
    "0";


  consoleOutput.innerHTML =
    `<div class="console-empty">
      Console output will appear here.
    </div>`;

}



// ============================================
// ADD CONSOLE MESSAGE
// ============================================

function addConsoleMessage(
  type,
  message
) {

  const empty =
    consoleOutput.querySelector(
      ".console-empty"
    );


  if (empty) {

    empty.remove();

  }


  const item =
    document.createElement(
      "div"
    );


  item.className =
    "console-message " +
    type;


  item.textContent =
    message;


  consoleOutput.appendChild(
    item
  );


  consoleMessages++;


  consoleCount.textContent =
    consoleMessages;


  consoleOutput.scrollTop =
    consoleOutput.scrollHeight;


  // Automatically open console
  // when an error occurs
  if (
    type === "error"
  ) {

    toggleConsole(
      true
    );

  }

}



// ============================================
// RECEIVE CONSOLE FROM IFRAME
// ============================================

window.addEventListener(
  "message",
  function (event) {

    if (
      !event.data ||
      event.data.source !==
        "liveforge-console"
    ) {

      return;

    }


    const allowedTypes = [
      "log",
      "info",
      "warn",
      "error"
    ];


    const type =
      allowedTypes.includes(
        event.data.type
      )
        ? event.data.type
        : "log";


    addConsoleMessage(
      type,
      event.data.message
    );

  }
);



// ============================================
// REFRESH ALL EDITORS
// ============================================

function refreshAllEditors() {

  Object.values(editors)
    .forEach(
      function (editor) {

        editor.refresh();

      }
    );

}



// ============================================
// VERTICAL DRAG RESIZER
// ============================================

let isResizing =
  false;



resizer.addEventListener(
  "mousedown",
  function () {

    if (
      window.innerWidth <= 650
    ) {

      return;

    }


    isResizing =
      true;


    document.body.style.cursor =
      "col-resize";


    document.body.style.userSelect =
      "none";


    preview.style.pointerEvents =
      "none";

  }
);



document.addEventListener(
  "mousemove",
  function (event) {

    if (
      !isResizing
    ) {

      return;

    }


    const workspaceRect =
      workspace.getBoundingClientRect();


    const relativeX =
      event.clientX -
      workspaceRect.left;


    const percentage =
      (
        relativeX /
        workspaceRect.width
      ) * 100;


    if (
      percentage > 25 &&
      percentage < 75
    ) {

      editorPanel.style.width =
        percentage + "%";


      editors[
        activeEditorName
      ].refresh();

    }

  }
);



document.addEventListener(
  "mouseup",
  function () {

    if (
      !isResizing
    ) {

      return;

    }


    isResizing =
      false;


    document.body.style.cursor =
      "";


    document.body.style.userSelect =
      "";


    preview.style.pointerEvents =
      "";


    refreshAllEditors();

  }
);



// ============================================
// TOUCH RESIZER
// ============================================

resizer.addEventListener(
  "touchstart",
  function (event) {

    if (
      window.innerWidth <= 650
    ) {

      return;

    }


    isResizing =
      true;


    preview.style.pointerEvents =
      "none";


    event.preventDefault();

  },
  {
    passive: false
  }
);



document.addEventListener(
  "touchmove",
  function (event) {

    if (
      !isResizing
    ) {

      return;

    }


    const touch =
      event.touches[0];


    const workspaceRect =
      workspace.getBoundingClientRect();


    const relativeX =
      touch.clientX -
      workspaceRect.left;


    const percentage =
      (
        relativeX /
        workspaceRect.width
      ) * 100;


    if (
      percentage > 25 &&
      percentage < 75
    ) {

      editorPanel.style.width =
        percentage + "%";


      editors[
        activeEditorName
      ].refresh();

    }


    event.preventDefault();

  },
  {
    passive: false
  }
);



document.addEventListener(
  "touchend",
  function () {

    if (
      !isResizing
    ) {

      return;

    }


    isResizing =
      false;


    preview.style.pointerEvents =
      "";


    refreshAllEditors();

  }
);



// ============================================
// WINDOW RESIZE
// ============================================

window.addEventListener(
  "resize",
  function () {

    if (
      window.innerWidth <= 650
    ) {

      editorPanel.style.width =
        "100%";

    } else if (
      editorPanel.style.width ===
      "100%"
    ) {

      editorPanel.style.width =
        "50%";

    }


    refreshAllEditors();

  }
);



// ============================================
// INITIAL STARTUP
// ============================================

updateStats();

updateCursorPosition();

runPreview();


setTimeout(
  function () {

    refreshAllEditors();

    htmlEditor.focus();

  },
  100
);