import { datas } from './javvdata'
console.log(datas);

const template = document.querySelector("[data-templete]");
const container = document.querySelector("[data-container]");

datas.map((data) => {
  const clone = template.content.cloneNode(true);

  const heading = clone.querySelector("[data-title]");
  const input = clone.querySelector("[data-input]");
  const showbtn = clone.querySelectorAll("[data-show]")[0];
  const maindiv = clone.querySelector("[data-maindiv]");
  const output = clone.querySelector("[data-output]");

  show(showbtn, maindiv);

  heading.innerText = data.name;
  input.innerHTML = data.input;


  output.innerHTML = data.output;

  container.append(clone);

  return { title: data.name, input: data.input, output: data.output };
});

function show(showbtn, maindiv) {
  showbtn.addEventListener("click", () => {
    maindiv.classList.toggle("hidden");
  });
}

