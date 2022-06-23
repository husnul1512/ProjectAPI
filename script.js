// fetch
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("https://masak-apa-tomorisakura.vercel.app/api/search/?q=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const results = response.results;
      let data = "";
      for (i = 0; i < results.length; i++) {
        data = data + `<p>${results[i].title}</p>`;
      }
      document.getElementById("display").innerHTML = data;
    });
});

//display
