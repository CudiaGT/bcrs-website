import { getOffCampusIdentifier } from "../Listings/renderFilteredPosts.js";
import {getFormData} from "../../../main.js";
import renderDetailView from "./renderDetailView.js";



export default function DetailView(data) {
    let offCampusIdentifier = getOffCampusIdentifier(); //the address of clicked listing


    let [payload, listingLocation] = getFormData();
    let matchingListingArray;
    console.log("In DetailView.js");
    console.log("listing location:", listingLocation);
    console.log("offCampusIdentifier: ", offCampusIdentifier);

    if (listingLocation && data[listingLocation]) {
            matchingListingArray = data[listingLocation].filter(group => 
            group.address == offCampusIdentifier
        );
    }
    //matchingListingArray contains the singular matching listing
    console.log("matchingListingArray: ", matchingListingArray);
    let matchingListing = matchingListingArray[0];

    //render detail view for the listing that triggered the "click" event
    console.log("Matching Listing:", matchingListing);
    renderDetailView(matchingListing);
}