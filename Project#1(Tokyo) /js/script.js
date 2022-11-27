const hi = document.querySelector(".hi__title");
const hiContent = hi.innerHTML;
console.log(hiContent);
hi.innerHTML = "Hi friend";

hi.insertAdjacentHTML("beforebegin", `<p>Im frontender</p>`);

const text = document.createElement("p");
text.innerHTML = "I can work IT ";

hi.insertAdjacentHTML("afterend", text);
