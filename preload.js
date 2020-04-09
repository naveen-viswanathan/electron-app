// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const remote = require('electron').remote;
const win = remote.getCurrentWindow();
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  document.getElementById('close-btn').addEventListener("click", event => {
    win.close();
  });
})
