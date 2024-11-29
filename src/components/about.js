fetch("../../about.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const aboutDiv = document.querySelector("body");
    aboutDiv.innerHTML = `

          <header id="aboutHead">
        
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
          </main>
        `;
    const footer = document.querySelector("footer");

    footer.innerHTML = `
  <div class="footer-quote">
      <p>"The best thing about having a roommate is always having someone to blame when food goes missing."" - Anonymous</p>
    </div>
    <div class="footer-details">
      <div class="footer-column">
        <h4>CONTACT DETAILS</h4>
        <p><strong>Tel:</strong> +1 800-000-0000</p>
        <p><strong>Mov:</strong> +1 800-000-0000</p>
        <p><strong>E-mail:</strong> bcrm@bc.edu</p>
        <div class="social-icons">
          <a href="#"><img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/Facebook_icon_2013.svg.png?v=1732317204022" alt="Facebook"></a>
          <a href="#"><img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/Instagram_logo_2016.svg.webp?v=1732317202177" alt="Instagram"></a>
        </div>
      </div>
      <div class="footer-column">
        <h4>MENU</h4>
        <p>Home</p>
        <p>Listings</p>
        <p>BC Housing Calendar</p>
        <p>Resources</p>
      </div>
      <div class="footer-column">
        <h4>OUR PARTNERS</h4>
        <p>Division of Student Affairs</p>
        <p>Office of Residential Life</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Boston College Roomate Search. All rights reserved.</p>
    </div>`;
  });
