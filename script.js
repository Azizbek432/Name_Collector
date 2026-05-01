const input = document.getElementById("input");
const btn = document.getElementById("btn");
const clearAll = document.getElementById("clearAll");
const totalCount = document.getElementById("totalCount");
const error = document.querySelector(".error");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const name = input.value.trim();
    const ul = document.createElement("ul");
    ul.classList.add("nameList");
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
    result.appendChild(ul);

    totalCount.textContent = String(Number(totalCount.textContent || 0) + 1);
    input.value = "";
    input.focus();
  } else {
    error.style.display = "block";
  }
});

clearAll.addEventListener("click", () => {
  result.innerHTML = "";
  totalCount.textContent = 0;
  input.value = "";
  error.style.display = "none";
});
