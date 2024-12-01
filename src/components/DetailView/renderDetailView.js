import { renderNavBar } from "../../components/navbar.js";


export default function renderDetailView(matchingListing) {
    console.log("In renderDetailView.js");

    let body = document.querySelector("body");
    //render navbar for detail view page
    body.insertAdjacentHTML("beforeend", renderNavBar());

    //render detailed view for matchingListing:

}



function renderDetailViewPost(matchingListing) {
    
}