const addBtn = document.querySelector(".listc");
const inputBox = document.querySelector(".list input[type='text']");
const taskList = document.querySelector(".tasks ul");


function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <img src="xmark-solid-full.svg" alt="xmark-solid-full" class="cross">
  `;
  taskList.appendChild(li);
  inputBox.value = "";
  attachEvents(li);
}
function attachEvents(li) {
  const checkbox = li.querySelector("input[type='checkbox']");
  const span = li.querySelector("span");
  const cross = li.querySelector(".cross");
  checkbox.addEventListener("change", function () {
    span.classList.toggle("done", this.checked);
  });

  cross.addEventListener("click", function () {
    li.remove();
  });
}
document.querySelectorAll(".tasks ul li").forEach(attachEvents);
addBtn.addEventListener("click", addTask);
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});
