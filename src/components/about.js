 import { renderNavBar, toggleMenu } from "./navbar.js";
 import { renderFooter } from "./footer.js";

export function renderAbout() {
fetch("../about.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const aboutDiv = document.querySelector("body");
    aboutDiv.innerHTML = `
          <header>
            ${renderNavBar()}
          </header>

          <main>
            <div class="image-container">
              <p class="overlay-text imgResTop">Our Story</p>
              <img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/BCres.webp?v=1732136296580" alt="BCRes">
             
             </div>
              
              <div class="gold">
              </div>
              
              <div class="maroon">
              <p class="overlay-text imgResBottom">${data.story}</p>
              </div>
              
              <div class="services">
              <div class="image-container2">
              <img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/hug.webp?v=1732305145335" alt="Two Women Hug"/>
             <p class="section-title-about">Our Services</p>
             </div>
             <div class="problems">
              <p class="services oncampus">Finding Roomates for On Campus </p>
              <p class="services offcampus">Finding Roomates & Subletters for Off Campus </p>
              </div>
              <p class="services servicesExplanation"> ${data.services} </p>
              </div>
              
              <div class="mission">
              <img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/DJI_0482.jpg?v=1732313520547" "BC Gasson Hall at Sunset" />
              <p class="mission section-title-about">Our Mission</p>
              </div>
              <div class="statement">
              <p>${data.mission}
              </p>
              </div>
              
              <div class="team">
              <p class="section-title-about">Meet the Team</p>
              <div class="teamMember">
              <img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/Screenshot%202024-11-22%20at%205.34.51%E2%80%AFPM.png?v=1732315382208" alt="Harim"/>
              <a target="_blank" href="${data.harimLink}">${data.harimName}</a> 
              </div>
              <div class="teamMember">
              <img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/Screenshot%202024-11-22%20at%205.41.59%E2%80%AFPM.png?v=1732315379677" alt="Lucas"/>
               <a target="_blank" href="${data.lucasLink}">${data.lucasName}</a>
             </div>
             <div class="teamMember">
             <img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/Screenshot%202024-11-22%20at%205.34.02%E2%80%AFPM.png?v=1732316040764" alt="Andy"/>
               <a target="_blank" href="${data.andyLink}">${data.andyName}</a>
             </div>
             <div class="teamMember">
             <img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/Screenshot%202024-11-22%20at%205.34.12%E2%80%AFPM.png?v=1732315387443" alt="Varun"/>
               <a target="_blank" href="${data.varunLink}">${data.varunName}</a>
              </div>
              </div>
              <footer>
              ${renderFooter()}
              </footer>
          </main>
        `;
  });
}
