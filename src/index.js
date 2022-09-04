document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const button = document.querySelector(".btn");
  const description = document.querySelector("#new-task-description");
  const div = document.querySelector("#tasks");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const list = document.createElement("li");
    list.textContent = description.value;
    div.appendChild(list);
  });
});