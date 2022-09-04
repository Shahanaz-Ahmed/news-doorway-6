const loadModal = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/modal/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayModal(data.data));
};

const displayModal = (modals) => {
  console.log(modals);

  const modalConatainer = document.getElementById("exampleModal");
  let text1 = "0";
  let cnt = 1;
  modals.forEach((modal) => {
    const modalDiv = document.createElement("div");
    text2 = cnt.toString();
    let result = text1.concat(text2);
    modalDiv.innerHTML = `
       <h3>Fol gori felibo ai modal</h3>`;
    modalConatainer.appendChild(modalDiv);
    cnt++;
  });
};
