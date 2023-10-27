const searchForm =  document.getElementById("search-form button");
const searchBox =  document.getElementById("search-box");
const searchResult =  document.getElementById("search-result");
const showMoreBtn =  document.getElementById("show-more-btn");

let keyword ="";
let page = 1;

async function search(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=dK_chnpwBrABTK6O_baV5zE9AVMcYgXAZGvB0xbUvbM`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

