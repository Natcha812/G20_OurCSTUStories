let submit = document.querySelector("#submit");
let textex = document.querySelector("#textex");

submit.addEventListener("submit", function(e){
  e.preventDefault();
  console.log(textex.value);
});

