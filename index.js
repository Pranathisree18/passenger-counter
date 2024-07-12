
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let incrementBtn = document.getElementById("increment-btn");
let resetBtn = document.getElementById("reset-btn");
let clearBtn = document.getElementById("clear-btn");
let count = 0;

function increment() {
    count+=1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
}


function reset() {
    count = 0;
    countEl.textContent = count;
}

function clearSaves() {
    saveEl.textContent = "";
}

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
resetBtn.addEventListener("click", reset);
clearBtn.addEventListener("click", clearSaves);
  