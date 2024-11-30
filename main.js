import renderHeader from "./src/components/Homepage/Header.js";
import renderLandingSplash from "./src/components/Homepage/LandingSplash.js";
import {renderOnCampusListings, renderOffCampusListings} from "./src/components/Homepage/Listings.js";
import renderForm from "./src/components/Homepage/Form.js";
import renderListings from "./src/components/Listings/Listings.js";
import { renderNavBar, toggleMenu } from "./src/components/navbar.js";
import {renderFooter} from "./src/components/footer.js";
//Declare global form object that will be shared across the module
//This form object is updated dynamically whenever a change is felt by the select tag in the search bar
//on the home page
let form = {
  "listing-location": "",
  "class-year": 0,
  "size-of-group": 0,
  "desired-number-of-roommates": 0,
  "preferred-dorm": ""
};
  
export default function renderMainPage(data) {

    let body = document.querySelector("body");


    //render header of home page
    let header = document.createElement("header");
    header.innerHTML += renderNavBar();
    //add header to existing body
    body.appendChild(header);

    //render landing splash of home page
    let landing_Splash = document.createElement("div");
    landing_Splash.id = "landing-splash";
    //create outermost div tag of landing splash
    let div = document.createElement("div");
    div.classList.add("search-bar");
    //create main tag of landing splash
    let main = document.createElement("main");
    main.classList.add("homepage");
    main.innerHTML += renderLandingSplash(data);
    //append main tag to outermost div
    div.appendChild(main);
    //append outermostdiv to landing splash
    landing_Splash.appendChild(div);
    //append landing_Splash to current body
    body.appendChild(landing_Splash);


    //Rendering Andy's part
    let onCampus_wrapper = document.createElement("div");
    onCampus_wrapper.id = "on-campus";
    onCampus_wrapper.innerHTML += renderOnCampusListings();

    let offCampus_wrapper = document.createElement("div");
    offCampus_wrapper.id = "off-campus";
    offCampus_wrapper.innerHTML += renderOffCampusListings();
    //Add both onCampus and offCampus wrappers to current body
    body.appendChild(onCampus_wrapper);
    body.appendChild(offCampus_wrapper);

    //Rendering Lucas' part 
    let about_wrapper = document.createElement("div");
    about_wrapper.classList.add("aboutUs");
    about_wrapper.innerHTML = `
                <h2 class="section-title"><span class="keyword">Mission</span></h2>
                <p>
                    At Boston College Roomate Search (BCRS), our vision is to unite BC Students with their ideal roommates. During times of 
                    stress and uncertainty, when the BC Housing Lottery doesn't go your way, we're here to help ease the path to your ideal
                    future housing. We also aim to facilitate the roomate searching process when in need of subletters. Being BC Students
                    ourselves, means that we understand the struggle and pain associated with BC Housing. Therefore, always know that BCRS
                    is here for you, no matter how difficult the situation may be. 

                    BCRS strives to light the path for a BC Eagle's journey from one nest to another.
               </p>
    `;
    body.appendChild(about_wrapper);

    //Rendering Harim's part
    let form_wrapper = document.createElement("div");
    form_wrapper.id = "post";
    form_wrapper.innerHTML = renderForm();
    //Add form to current body
    body.appendChild(form_wrapper);

    //Rendering Footer
    renderFooter();

    //add event listener to all select fields in the searchbar
    const selectArray = document.querySelectorAll(".select");
    console.log("selectArray: ", selectArray);

    for (let select of selectArray) {
      select.addEventListener("change", (e) => {
        console.log(e.currentTarget);
        console.log(e.currentTarget.id);
        console.log(e.target);
        console.log(e.target.value);

        //update the corresponding key in form
        //convert any numerical answers into integers
        if (checkForNumberInString(e.target.value)) {
          form[e.currentTarget.id] = Number(e.target.value);
        } else { //keep string answers as strings
          form[e.currentTarget.id] = e.target.value;
        }

        console.log("form after change:", form);
        console.log(`${form[e.currentTarget.id]}`);
        console.log(`${e.currentTarget.id} value from EVENT: ${e.target.value}`);

        //Save updated form to localStorage, allows changed form to be accessible across different windows
        localStorage.setItem("form", JSON.stringify(form))

      });
    }

    //When search button is hit, we want to render new page with appropriate listings 
    //First, rab form
    let formTag = document.querySelector("form.search");
    

    formTag.addEventListener("submit", (e) => {
      console.log(e.currentTarget);
      console.log(e.target);
      console.log(form);
      e.preventDefault(); //prevents form from navigating to .php page

      //adds parameter "listings" to url and sets its value to "true". Used to render the listings page
      //from index.js
      const currentURL = new URL(window.location); 
      currentURL.searchParams.set("listings", "true");
      window.location.href = currentURL;
      console.log(window.location.href);
    })
  }

  //When invoked, gets updated form data from localStorage
  export function getFormData() {
    const savedForm = localStorage.getItem("form"); //Retrieve form from local storage
    if (savedForm) {
      return JSON.parse(savedForm); //returned parsed form data if found
    } 
    return form; //Fallback to the initial form if nothing is stored
  }

  //If any of the user answers to the search fields are numbers, this function converts those answers
  //to integers so they match the format of db.JSON
  function checkForNumberInString(string) {
    switch (string) {
      case "1":
        return true;
      case "2":
          return true;
      case "3":
        return true;
      case "4":
        return true;  
      case "5":
        return true;
      case "6":
        return true;
      case "7":
        return true;
      case "8":
        return true;
      case "2025":
        return true;
      case "2026":
        return true;
      case "2027":
        return true;
      case "2028":
        return true;
      default:
        return false;  
    }
  }
