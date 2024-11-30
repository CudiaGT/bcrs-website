import renderSplash from "./Splash.js";
import renderSearchBar from "./SearchBar.js";



export default function renderLandingSplash(div, main) {
    
    return `
    ${renderSplash()}
    ${renderSearchBar()}
    `;


}