import renderBottomOffCampus from "./bottomOffCampus.js";
import renderTop from "./top.js";

export default function renderPost(p) {
    return `<div class="post"> ${renderTop(p)} ${renderBottomOffCampus(p)} </div>`
  };