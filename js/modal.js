const loadModal = (id) => {
  const url = ` https://openapi.programming-hero.com/api/news/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayModalDetails(data.data));
};

const displayModalDetails = (modals) => {
  console.log(modals);
  const modalTitle = document.getElementById("exampleModalLabel");
  modalTitle.innerText = modals[0].title;
  //console.log(modalTitle);
  const modalDetails = document.getElementById("modal-details");
  modalDetails.innerHTML = `
  <img src="${
    modals[0].thumbnail_url
  }" class="card-img-top img-fluid" alt="...">
  <p>Release Date: ${
    modals[0].details ? modals[0].details : "No Release Date Found"
  }</p>
    `;
};
