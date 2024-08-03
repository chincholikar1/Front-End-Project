const icon = document.querySelector(".icon");
const ul = document.querySelector("ul");
const btnns = document.querySelector("#btnns");

icon.addEventListener("click", () => {
    ul.classList.toggle("showdata");
    console.log(ul);
});

btnns.addEventListener("click", () => {
    alert("Welcome to Vishvajeet's site");
    alert("There are no posts");
    console.log("Welcome to Vishvajeet's site");
    console.log("There are no posts");
});
