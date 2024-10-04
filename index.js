let countNum = document.getElementById("count-num");
let pEntries = document.getElementById("p-entries");
let count = 0;

function increaseCount() {
  count = count + 1;
  countNum.textContent = count;
  console.log(count);
}

function saveCount() {
  let countStr = count + " - ";
  pEntries.textContent += countStr;
  countNum.textContent = 0;
  count = 0;
  console.log("save");
}
