import renderFilteredPosts from "./renderFilteredPosts.js"
import renderPosts from "../renderPosts.js";





export default function renderListings(payload, data) {
    console.log("IN Listings.js");
    console.log("data: ", data);
    console.log("payload", payload);

    // Ensure the form is properly populated with user selections
    if (!payload) {
        console.log("Payload is empty or undefined.");
        return;
    }

    //Check if user indicated interest in offcampus, oncampus, or both types of listings
    let listingLocation = payload["listing-location"];
    console.log("listing location:", data[listingLocation]);

    //if listing location is valid and exists in db.JSON, filter db.JSON base on the 
    //other parameters the user entered
    if (listingLocation && data[listingLocation]) {
        let filtered = data[listingLocation].filter(group => 
            group.numGroup == payload["size-of-group"] ||
            group.numSeek == payload["desired-number-of-roommates"] ||
            group.dorm == payload["preferred-dorm"]
        );

        console.log("Filtered listings:", filtered);

        //TO-DO: render webpage with filtered listings
        //ie. renderFilteredPosts(filtered);
        

    } else {
        console.log("Invalid listing location or data not available in db.JSON.");
    }


}