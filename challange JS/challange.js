//question 1
// update skills lists

const reduxUpdate = document.querySelector("[data-name=Redux] .skills__title");
const reactTlUpdate = document.querySelector(
  "[data-name= 'React testing library'] .skills__title"
);

reduxUpdate.textContent = "Node JS";
reactTlUpdate.textContent = "MongoDb";

/*********/

//question 2

//Add Typescript

const li = `
<li data-name="TYPESCRIPT" class="skills__column">
            <h2 class="skills__title">Typescript</h2>
            <span class="skills__years"> only 2 years</span>`;

const liElement = document.createRange().createContextualFragment(li);

const Typescript = document.querySelector(`[data-name=Javascript]`);

Typescript.insertAdjacentHTML("afterend", li);

/*********/
// Question 3

// remove download Button

const downloadButton = document.querySelector(".find-out-link");
downloadButton.remove();

/*********/
//Question 4

//picture Width Adjustment

const picture = document.querySelector(".bio__pic");
picture.style.width = "36rem";

/*********/
//Question 5

// Highlight skills

const skillsList = document.querySelectorAll(".skills__column");

[...skillsList].map((item) => {
  item.addEventListener("click", () => {
    const activeElement = document.querySelector(".underline");

    if (activeElement) {
      activeElement.classList.remove("underline");
    }
    item.classList.add("underline");
  });
});
