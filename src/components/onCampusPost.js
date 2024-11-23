import renderBottomOnCampus from "./bottomOnCampus.js";
import renderTop from "./top.js";

export default function renderPost(p) {
    return `<div class="post"> ${renderTop(p)} ${renderBottomOnCampus(p)} </div>`
  };