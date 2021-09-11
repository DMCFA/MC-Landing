//Show burger bar

const changeDisplay = () => {
  //local variables
  const burger = document.querySelector(".burger");
  burger.style.display = "none";
  const icon = document.querySelector(".icon");

  //Event listener
  icon.addEventListener("click", () => {
    //Change display property and icon
    burger.style.display = burger.style.display == "none" ? "flex" : "none";
    if (burger.style.display == "flex") {
      icon.classList.toggle("far");
      icon.classList.toggle("fa-times");
    } else {
      icon.classList.remove("far");
      icon.classList.remove("fa-times");
    }
  });
};

changeDisplay();

//Get current year for footer

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

//Avoid page reload on submit

const btn = document.getElementById("submit");

btn.addEventListener("submit", (e) => {
  e.preventDefault();
});
