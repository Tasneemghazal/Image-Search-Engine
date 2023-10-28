const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function search() {
  keyword = searchBox.value;
  const client_Id = "dK_chnpwBrABTK6O_baV5zE9AVMcYgXAZGvB0xbUvbM";
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${client_Id}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  if (page == 1) {
    searchResult.innerHTML = "";
  }
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imglink = document.createElement("a");
    imglink.href = result.links.html;
    imglink.target = "_blank";
    imglink.appendChild(image);
    searchResult.appendChild(imglink);
  });
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  search();
});
showMoreBtn.addEventListener("click", (e) => {
  page++;
});
