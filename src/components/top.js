export default function renderTop(p) {
    let html = `
        <div class="top" style="background-image: url('${p.image.src}'); background-size: cover; background-position: center;">
        </div>`;
    return html;
  };