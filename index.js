
import renderMainPage, {getFormData} from "./main.js";
import renderPosts from "./src/components/renderPosts.js";
import renderListings from "./src/components/Listings/Listings.js";



fetch("db.JSON")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("received data=", data);
        const urlParams = new URLSearchParams(window.location.search);
        const listings = urlParams.get("listings");
        const page = listings == null ? "home" : "listings";

        console.log(page);
        if (page == "listings") {
            //collect updated form data
            let [payload, listingLocation] = getFormData();
            //need a new renderListings function that workes with payload data
            renderListings(listingLocation, payload, data);

        } else { //if page == null just render home page
            renderMainPage(data);
            renderPosts(data);
        }
    });