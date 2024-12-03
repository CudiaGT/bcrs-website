import { getOffCampusIdentifier, getOnCampusIdentifier } from "../Listings/renderFilteredPosts.js";
import {getFormData} from "../../../main.js";
import renderDetailView from "./renderDetailView.js";




function DetailViewOnCampus(listingLocation, data) {
    let onCampusIdentifier = getOnCampusIdentifier(); //the ID of clicked listing
    let matchingListingArray;
    console.log("onCampusIdentifier: ", onCampusIdentifier);

    if (listingLocation && data[listingLocation]) {
        matchingListingArray = data[listingLocation].filter(group => 
        group.id == onCampusIdentifier
        );
    }
    //matchingListingArray contains the singular matching listing
    console.log("matchingListingArray: ", matchingListingArray);
    let matchingListing = matchingListingArray[0];

    //render detail view for the listing that triggered the "click" event
    console.log("Matching Listing:", matchingListing);
    renderDetailView(matchingListing);
}



function DetailViewOffCampus(listingLocation, data) {
    let offCampusIdentifier = getOffCampusIdentifier(); //the address of clicked listing
    let matchingListingArray;
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




export default function DetailView(data) {
    console.log("In DetailView.js");

    let [payload, listingLocation] = getFormData();
    console.log("listing location:", listingLocation);
    
    if (listingLocation == "oncampus") {
        DetailViewOnCampus(listingLocation, data);

    }

    else if (listingLocation == "offcampus") {
        DetailViewOffCampus(listingLocation, data);
    }
}