
import renderMainPage, {getFormData} from "./main.js";
import renderPosts from "./src/components/renderPosts.js";
import DetailView from "./src/components/DetailView/DetailView.js"
import renderListings from "./src/components/Listings/Listings.js";



fetch("db.JSON")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("received data=", data);
        const urlParams = new URLSearchParams(window.location.search);

        //get values of URL parameters
        //returns null if values don't exist yet
        const listingsParamValue = urlParams.get("listings");
        console.log("listings Param:", listingsParamValue);

        const DetailViewParamValue = urlParams.get("detailView")
        console.log("DetailView Param: ", DetailViewParamValue);
        
        const page = listingsParamValue == null ? "home" : "listings";

        if (DetailViewParamValue == "true") {
            //pass renderDetailView the data from the card that triggered the click event 
            DetailView(data);

        } else if (listingsParamValue == "true") {
            //collect updated form data
            let [payload, listingLocation] = getFormData();
            //need a new renderListings function that workes with payload data
            renderListings(listingLocation, payload, data);

        } else { //if all URL parameters are null, just render home page
            renderMainPage(data);
            renderPosts(data);
        }
    });