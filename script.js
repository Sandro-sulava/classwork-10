const title = document.getElementById("title");
const description = document.getElementById("description");
const image = document.getElementById("image");

fetch(`https://fakestoreapi.com/products/1`)
  .then((res) => res.json())
  .then((data) => {
    title.textContent = data.title;
    description.textContent = data.description;
    image.src = data.image;
  });
