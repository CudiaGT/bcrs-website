import renderPosts from "./src/components/renderPosts.js";

fetch("db.JSON")
  .then((response) => response.json())
  .then((data) => {
    renderPosts(data);
  });