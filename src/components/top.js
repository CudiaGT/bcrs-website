export default function renderTop(p) {
    let html = `
        <div class="top" style="background-image: url('${p.image.src}'); background-size: cover; background-position: center;">
          <div class="favoriteContainer">
            <button class="favorite">
              <img src="Assets/postings/bookmark-white.png" alt="Bookmark">
            </button>
          </div>
          <div class="arrowContainer">
            <button class="arrow">
              <img src="Assets/postings/left-arrow.png" alt="Left Arrow">
            </button>
            <button class="arrow">
              <img src="Assets/postings/right-arrow.png" alt="Right Arrow">
            </button>
          </div>
        </div>`;
    return html;
  };