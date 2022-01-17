import { shuffle, take } from "lodash-es";

/* This data would PROBABLY come from an external source */
const ingredients = [
  "Banana",
  "Mango",
  "Yogurt",
  "Sorbet",
  "Silken tofu",
  "Nut butters",
  "Avocado",
  "Bananas",
  "Pineapple",
  "Strawberries",
  "Blueberries",
  "Raspberries",
  "Blackberries",
  "Cherries",
  "Peaches",
  "Cantaloupe",
  "Watermelon",
  "Pomegranate seeds",
  "Kiwi",
  "Acai berries",
];

const button = document.querySelector("button");
const ul = document.querySelector("ul");

function shuffleAndRender() {
  /* How can we shuffle??? Maybe there is some awesome
  functionality in NPM somewhere? :D:D:D */

  const shuffledIngredients = shuffle(ingredients);
  const fiveIngredients = take(shuffledIngredients, 5);

  fiveIngredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ul.append(li);
  });
}

button.addEventListener("click", () => {
  ul.textContent = null;
  shuffleAndRender();
});

console.log("yoooloo smoothie");
