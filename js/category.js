const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.data.news_category));
};

const displayCategories = (categories) => {
  //console.log(categories);
  const categoriesContainer = document.getElementById("category-container");
  let text1 = "0";
  let cnt = 1;
  categories.forEach((category) => {
    const categoryDiv = document.createElement("span");
    text2 = cnt.toString();
    let result = text1.concat(text2);
    categoryDiv.classList.add("category");
    categoryDiv.innerHTML = `
       <a onclick="loadNews('${result}')" class="px-3 text-secondary text-decoration-none fs-4">${category.category_name}</a>`;
    categoriesContainer.appendChild(categoryDiv);
    cnt++;
  });
};
loadCategories();
