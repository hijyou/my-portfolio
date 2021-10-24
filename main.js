const addbutton = document.getElementById("add-button");
let cnt = 0;
addbutton.onclick = function () {
  cnt += 1;
  goodpoint.textContent = cnt;
};
localStorage.cnt = cnt;
const anothermemo = localStorage.cnt;
console.log(anothermemo);
