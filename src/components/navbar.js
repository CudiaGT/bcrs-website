export function toggleMenu() {
    const links = document.querySelector("nav .links");
    links.classList.toggle("active");
  }
  
window.toggleMenu = toggleMenu;

export function renderNavBar() {
  return `
  <div id="nav">
  <nav>
  <img
      src="https://cdn.glitch.global/35a90707-afbf-469e-b877-030bdb0009b4/mobile-navigation-bar-menu-responsive-ui-512%20copy.png?v=1732911149726"
      alt="Menu Icon"
      class="menu-icon"
      onclick="toggleMenu()"
  />
  <h2 class="BCRS">
    <a href = "index.html#gassonHall"><span class="goldLogo">BC</span><span class="whiteLogo">RS</span></a>
  </h2>
  <div class="links">
  <p><a href="?page=home">Home</a></p>
  <p><a href="?page=listings">Listings</a></p>
  <p><a href="?page=about">About</a></p>
  <p>
    <a
      href="https://www.bc.edu/bc-web/offices/studentaffairs/sites/residential-life/living-in-bc-housing/hall-openings-closings.html"
      target="_blank">Housing Calendar
    </a>
  </p>
  <p>
    <a
      href="https://www.bc.edu/bc-web/offices/studentaffairs/sites/residential-life/living-in-bc-housing.html"
      target="_blank">Resources
    </a>
  </p>
  <p><a href="index.html#post">Contact</a></p>
  </div>
  <div class="signin">
      <a href="?page=signin">Sign In</a>
      <img src="https://cdn.glitch.global/c7d70598-61bb-4c55-ac66-58662df41931/Profile%20Icon.png?v=1732691728436" alt="Profile Icon">
  </div>
</nav>
</div>
  `;
}



