import renderFilteredPosts from "./renderFilteredPosts.js";




export default function renderListings(listingLocation, payload, data) {
    console.log("IN Listings.js");
    console.log("payload", payload);
    console.log("data: ", data);

    // Ensure the form is properly populated with user selections
    if (!payload) {
        console.log("Payload is empty or undefined.");
        return;
    }

    //Check if user indicated interest in offcampus, oncampus, or both types of listings
    console.log("listing location:", listingLocation);

    //if listing location is valid and exists in db.JSON, filter db.JSON base on the 
    //other parameters the user entered
    if (listingLocation && data[listingLocation]) {
        let filtered = data[listingLocation].filter(group => 
            group.numGroup == payload["size-of-group"] ||
            group.numSeek == payload["desired-number-of-roommates"] ||
            group.dorm == payload["preferred-dorm"]
        );

        console.log("Filtered listings:", filtered);

        //Render webpage with filtered listings
        renderFilteredPosts(filtered, listingLocation);
        
    } else {
        console.log("Invalid listing location or data not available in db.JSON.");
    }


}