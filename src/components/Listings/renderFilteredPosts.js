import { renderNavBar } from "../navbar.js";
import renderOnCampusPost from "../onCampusPost.js";
import renderOffCampusPost from "../offCampusPost.js";

export default function renderFilteredPosts(filteredListings, listingLocation) {
    let body = document.querySelector("body");

    //render navbar for listings page
    body.innerHTML += renderNavBar();

    //render posts for listings page
    if (listingLocation == "oncampus") {
        for(let listing of filteredListings) {
            //add listing to body html
            body.innerHTML += renderOnCampusPost(listing);
        }
    }
    else if (listingLocation == "offcampus") {
        for(let listing of filteredListings) {
            body.innerHTML += renderOffCampusPost(listing);
        } 
    }
}