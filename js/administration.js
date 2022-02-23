const addImage = document.querySelector("#addImage");
const removeImage = document.querySelector("#removeImage");
const image = document.querySelector("figure img");
const part = document.querySelector("#part");
const body = document.querySelector("body");

// console.log(removeImage);

// removeImage.addEventListener("click", (e) => {
//   const parent = e.target.parentElement;
//   parent.removeChild(image);
// });

removeImage.addEventListener("click", (e) => {
  const button = e.target.parentElement;
  button.removeChild(image);
});
