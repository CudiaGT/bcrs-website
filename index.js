
import renderMainPage, {getFormData} from "./main.js";
import renderPosts from "./src/components/renderPosts.js";
import renderListings from "./src/components/Listings/Listings.js";
import {renderAbout} from "./src/components/about.js";
import { renderNavBar } from "./src/components/navbar.js";
import { renderFooter } from "./src/components/footer.js";



fetch("db.JSON")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("received data=", data);
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get("page");

        console.log(page);
        if (page == "listings") {
            //collect updated form data
            let [payload, listingLocation] = getFormData();
            //need a new renderListings function that workes with payload data
            renderListings(listingLocation, payload, data);
        }
        else if (page == "about") {
            renderAbout();
        } 

        else if(page == "signin") {
            renderSign
        }

        else { //if page == null just render home page
            renderMainPage(data);
            renderPosts(data);
        }
    });