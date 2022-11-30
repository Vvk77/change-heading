const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");

const change = (a) => {
  outputEl.innerHTML = `<${a}>` + inputEl.value + `<${a}/>`;
};

h1.addEventListener("click", () => change("h1") );
h2.addEventListener("click", () => change("h2") );
h3.addEventListener("click", () => change("h3") );