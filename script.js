// SETTINGS APPLY
document.getElementById('applySettings').addEventListener('click', function () {
  const foregroundColor = document.getElementById('foregroundColor').value;
  const backgroundColor = document.getElementById('backgroundColor').value;
  const fontFamily = document.getElementById('fontFamily').value;

  const contentArea = document.getElementById('content');
  contentArea.style.color = foregroundColor;
  contentArea.style.backgroundColor = backgroundColor;
  contentArea.style.fontFamily = fontFamily;

  const textWrapper = document.querySelector('.text-wrapper');
  if (textWrapper) {
    textWrapper.style.color = foregroundColor;
    textWrapper.style.backgroundColor = backgroundColor;
    textWrapper.style.fontFamily = fontFamily;
    textWrapper.style.fontSize = document.getElementById('fontSize').value + 'px';
    textWrapper.style.lineHeight = document.getElementById('lineHeight').value;
  }
});

// FILE UPLOAD
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileElem');
const contentDiv = document.getElementById('content');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});
function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
});
['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
});

dropArea.addEventListener('drop', handleDrop, false);
fileInput.addEventListener('change', function () {
  handleFiles(this.files);
});

function handleDrop(e) {
  const dt = e.dataTransfer;
  handleFiles(dt.files);
}

function handleFiles(files) {
  const file = files[0];
  if (!file) return;
  contentDiv.innerHTML = ''; // clear previous

  if (file.type === "text/plain") {
    const reader = new FileReader();
    reader.onload = function (e) {
      contentDiv.innerHTML = `<div class="text-wrapper">${e.target.result.replace(/\n/g, '<br>')}</div>`;
    };
    reader.readAsText(file);
  } else if (file.type === "application/pdf") {
    const reader = new FileReader();
    reader.onload = async function () {
      const typedarray = new Uint8Array(this.result);
      try {
        const pdf = await pdfjsLib.getDocument(typedarray).promise;
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map(item => item.str).join(' ');
          fullText += pageText + '\n\n';
        }
        contentDiv.innerHTML = `<div class="text-wrapper">${fullText.replace(/\n/g, '<br>')}</div>`;
      } catch (err) {
        contentDiv.innerHTML = `<p>Failed to load PDF.</p>`;
      }
    };
    reader.readAsArrayBuffer(file);
  } else {
    contentDiv.innerHTML = `<p>Unsupported file type</p>`;
  }
}

// SETTINGS DROPDOWN
const settingsButton = document.getElementById('settingsButton');
const settingsLi = document.querySelector('li.settings');

settingsButton.addEventListener('click', function (e) {
  e.stopPropagation();
  settingsLi.classList.toggle('active');
});

document.addEventListener('click', function () {
  settingsLi.classList.remove('active');
});
settingsLi.addEventListener('click', function (e) {
  e.stopPropagation();
});

// FONT SIZE / LINE HEIGHT LIVE
const fontSizeSlider = document.getElementById('fontSize');
const fontSizeValue = document.getElementById('fontSizeValue');
const lineHeightSlider = document.getElementById('lineHeight');
const lineHeightValue = document.getElementById('lineHeightValue');

fontSizeSlider.addEventListener('input', function () {
  const size = this.value + "px";
  fontSizeValue.textContent = this.value;
  const wrapper = document.querySelector('.text-wrapper');
  if (wrapper) wrapper.style.fontSize = size;
});
lineHeightSlider.addEventListener('input', function () {
  lineHeightValue.textContent = this.value;
  const wrapper = document.querySelector('.text-wrapper');
  if (wrapper) wrapper.style.lineHeight = this.value;
});
