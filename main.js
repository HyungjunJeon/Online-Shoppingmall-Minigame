const clothes = new Array(9);
clothes[0] = ["./Images/blue_p.png", "man, small size"];
clothes[1] = ["./Images/blue_s.png", "female, small size"];
clothes[2] = ["./Images/blue_t.png", "man, small size"];
clothes[3] = ["./Images/pink_p.png", "female, small size"];
clothes[4] = ["./Images/pink_s.png", "female, large size"];
clothes[5] = ["./Images/pink_t.png", "female, large size"];
clothes[6] = ["./Images/yellow_p.png", "man, large size"];
clothes[7] = ["./Images/yellow_s.png", "man, large size"];
clothes[8] = ["./Images/yellow_t.png", "male, large size"];

let list = document.querySelector("section");
list.setAttribute("class", "list");
for (let i = 0; i < clothes.length; i++) {
  const item = document.createElement("div");
  item.setAttribute("class", "item");
  const image = document.createElement("img");
  image.setAttribute("class", "image");
  const description = document.createElement("span");
  description.setAttribute("class", "description");
  list.appendChild(item);
  image.src = clothes[i][0];
  description.innerText = clothes[i][1];
  item.appendChild(image);
  item.appendChild(description);
}

let filteredClothes = [];
const shirtBtn = document.querySelector(".menu1");
shirtBtn.addEventListener("click", () => {
  filterClothes("_t");
  sortClothes(filteredClothes);
});
const pantsBtn = document.querySelector(".menu2");
pantsBtn.addEventListener("click", () => {
  filterClothes("_p");
  sortClothes(filteredClothes);
});
const skirtBtn = document.querySelector(".menu3");
skirtBtn.addEventListener("click", () => {
  filterClothes("_s");
  sortClothes(filteredClothes);
});
const blueBtn = document.querySelector(".menu4");
blueBtn.addEventListener("click", () => {
  filterClothes("blue");
  sortClothes(filteredClothes);
});
const yellowBtn = document.querySelector(".menu5");
yellowBtn.addEventListener("click", () => {
  filterClothes("yellow");
  sortClothes(filteredClothes);
});
const pinkBtn = document.querySelector(".menu6");
pinkBtn.addEventListener("click", () => {
  filterClothes("pink");
  sortClothes(filteredClothes);
});

function filterClothes(string) {
  filteredClothes = clothes.filter((array) => {
    return array[0].includes(string);
  });
  return filteredClothes;
}

function sortClothes(array) {
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  for (let i = 0; i < array.length; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "item");
    const image = document.createElement("img");
    image.setAttribute("class", "image");
    const description = document.createElement("span");
    description.setAttribute("class", "description");
    list.appendChild(item);
    image.src = array[i][0];
    description.innerText = array[i][1];
    item.appendChild(image);
    item.appendChild(description);
  }
}
