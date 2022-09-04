const loadNews = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data));
};

const displayNews = (allNews) => {
  const totalNews = document.getElementById("total-news");
  totalNews.innerText = allNews.length;
  console.log(allNews);
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = ``;
  for (const news of allNews) {
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("news");
    newsDiv.innerHTML = `
    <div id="card" class="card mb-5 border-0">
    <div class="row g-4 border-1 shadow-sm mb-3 bg-body rounded-3">
    <div class="col-md-4 ">
      <img class="h-100" src="${
        news.thumbnail_url
      }" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.slice(0, 300)}</p>
        <div class="mx-4 ps-3 mb-4 d-lg-flex flex-lg-row">
        <div class="d-lg-flex">
         <img class="w-25 author rounded-circle" style="width: 40px height: 40px border-radius: 25px" src="${
           news.author.img
         }">
           <h5>${news.author.name}</h5>
         </div>
         <div class="d-lg-flex flex-lg-row">
         <span><i class="fa-regular fa-eye p-2"></i></span>
         <h4>${news.total_view}</h4>
        <button type="button" href="#" class="btn btn-info" onclick="loadModal('${
          news._id
        }')"  data-bs-toggle="modal"
        data-bs-target="#exampleModal"> <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
      </div>
    </div>
  </div>
</div>
    `;
    newsContainer.appendChild(newsDiv);
    // const totalNews = document.getElementById("total-news");
    // totalNews.innerText = allNews.length;
  }
};
// loadNews();
