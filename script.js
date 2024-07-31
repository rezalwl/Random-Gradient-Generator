const $ = document;
const firstColorInput = $.querySelector("#color-a");
const secondColorInput = $.querySelector("#color-b");
const directions = $.querySelectorAll(".buttons button");
const generateBtn = $.querySelector("#submit");
const codeTextArea = $.querySelector("#code");
const copyBtn = $.querySelector("#copy");
const copyTooltip = $.querySelector("#myTooltip");

let currentDirection = "to bottom";

const setDirection = (direction, directionElem) => {
  for (let item of directions) {
    item.classList.remove("active");
  }
  if (directionElem.tagName === "BUTTON") {
    directionElem.classList.add("active");
  } else {
    directionElem.parentElement.classList.add("active");
  }
  currentDirection = direction;
};

const generateCssCode = () => {
  let cssCode = `background: linear-gradient(${currentDirection}, ${firstColorInput.value}, ${secondColorInput.value})`;

  codeTextArea.value = cssCode;

  document.body.style.cssText = cssCode;
};

const copyCssCode = () => {
  codeTextArea.select();
  navigator.clipboard.writeText(codeTextArea.value);
  copyTooltip.innerHTML = "Copy successful";
  copyTooltip.style.backgroundColor = "green";
};

const outFunc = () => {
  copyTooltip.innerHTML = "Copy to clipboard";
  copyTooltip.style.backgroundColor = "#555";
};

directions.forEach((direction) => {
  direction.addEventListener("click", (event) => {
    let direction = event.target.dataset.direction;

    setDirection(direction, event.target);
  });
});

generateBtn.addEventListener("click", generateCssCode);
copyBtn.addEventListener("click", copyCssCode);
copyBtn.addEventListener("mouseout", outFunc);

generateCssCode();
