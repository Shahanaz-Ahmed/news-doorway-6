const loadModal = (id) => {
  const url = ` https://openapi.programming-hero.com/api/news/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayModalDetails(data.data));
};

const displayModalDetails = (modals) => {
  console.log(modals);
  const modalTitle = document.getElementById("exampleModalLabel");
  modalTitle.innerText = modals.title;
};
