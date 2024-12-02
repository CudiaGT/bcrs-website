
import renderMainPage, {getFormData} from "./main.js";
import renderPosts from "./src/components/renderPosts.js";
import DetailView from "./src/components/DetailView/DetailView.js"
import renderListings from "./src/components/Listings/Listings.js";
import {renderAbout} from "./src/components/about.js";
import { renderNavBar } from "./src/components/navbar.js";
import { renderFooter } from "./src/components/footer.js";
import { renderSignInPage } from "./src/components/signin.js";
import { renderSignUpPage } from "./src/components/signup.js";




fetch("db.JSON")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("received data=", data);
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get("page");

        const DetailViewParamValue = urlParams.get("detailView")
        console.log("DetailView Param: ", DetailViewParamValue);

        if (DetailViewParamValue == "true") {
            //pass renderDetailView the data from the card that triggered the click event 
            DetailView(data);

        } else if (listingsParamValue == "true") {
            //collect updated form data
            let [payload, listingLocation] = getFormData();
            //need a new renderListings function that workes with payload data
            renderListings(listingLocation, payload, data);
        }
        else if (page == "about") {
            renderAbout();
        } 

        else if(page == "signin") {
            renderSign();
        }
 
        else if(page == "signup") {
            renderSignUpPage();
        }
  
        else { //if page == null just render home page
            renderMainPage(data);
            renderPosts(data);
        }
    });
