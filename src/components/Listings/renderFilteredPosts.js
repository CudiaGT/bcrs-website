import { renderNavBar } from "../navbar.js";
import renderOnCampusPost from "../onCampusPost.js";
import renderOffCampusPost from "../offCampusPost.js";

let onCampusIdentifier = "";
let offCampusIdentifier = "";

export default function renderFilteredPosts(filteredListings, listingLocation) {
    console.log("In renderFilteredPosts.js");
    console.log("Listing Location: ", listingLocation);
    let body = document.querySelector("body");

    //render navbar for listings page
    body.innerHTML += renderNavBar();
    //create div container for posts
    let container = document.createElement("div");
    container.classList.add("posts-container");
    //add container to end of body
    body.appendChild(container);

    //render posts for listings page
    let lastChild;
    if (listingLocation == "oncampus") {
        for(let listing of filteredListings) {
            console.log("Rendering listing: ", listing);
            container.insertAdjacentHTML("beforeend", renderOnCampusPost(listing));
            
            //attach event listener to anchor tag within post that checks if SHOW MORE Link has been clicked
            lastChild = container.lastElementChild;
            console.log("last child: ", lastChild);
            let showMoreLink = lastChild.querySelector("a.showMoreLink");
            console.log("show more link: ", showMoreLink);

            showMoreLink.addEventListener("click", (e) => {
                e.preventDefault(); //Prevent navigation to link
                //print out element that triggered event
                console.log("Click event triggered on:", e.target);
                console.log("Default prevented");

                //when showMoreLink on a card is clicked
                //we want to save any specific info (ie. address, id) from the card
                //Ensures that we're always getting the address of the post with the a tag
                //that triggered the click event

                //For oncampus we want to find the specific id of the post which will be the id value of the div with class "showMore onCampus"
                //Navigate up the DOM then down
                console.log("div with id: ", showMoreLink.closest("div.showMore"))
                onCampusIdentifier = showMoreLink.closest("div.showMore").getAttribute("id");
                //Need to convert string onCampusIdentifier to int
                let onCampusIdentifierNumeric = Number(onCampusIdentifier);

                console.log("onCampusNumeric:", onCampusIdentifierNumeric);
                //Save identifier to local storage
                localStorage.setItem("onCampusIdentifier", onCampusIdentifierNumeric);

                //Also want to change params of url in order to render DetailView page from index.js
                //Change URL params
                const currentURL = new URL(window.location);
                currentURL.searchParams.set("page", "detailView");
                //currentURL.searchParams.delete("listings");
                window.location.href = currentURL;
                console.log("New URL:", window.location.href);
            });
        
        }
    }
    else if (listingLocation == "offcampus") {
        for(let listing of filteredListings) {
            console.log("Rendering listing: ", listing);
            container.insertAdjacentHTML("beforeend", renderOffCampusPost(listing));

            //attach event listener to anchor tag within post that checks if SHOW MORE Link has been clicked
            lastChild = container.lastElementChild;
            console.log("last child: ", lastChild);
            let showMoreLink = lastChild.querySelector("a.showMoreLink");
            console.log("show more link: ", showMoreLink);

            showMoreLink.addEventListener("click", (e) => {
                e.preventDefault(); //Prevent navigation to link
                //print out element that triggered event
                console.log("Click event triggered on:", e.target);
                console.log("Default prevented");

                //when showMoreLink on a card is clicked
                //we want to save any specific info (ie. address) from the card
                //Ensures that we're always getting the address of the post with the a tag
                //that triggered the click event

                //Navigate up the DOM then down
                offCampusIdentifier = showMoreLink.closest("div.post").querySelector("div.bottomIMG span").textContent;

                console.log("offCampusIdentifier:", offCampusIdentifier);
                //Save identifier to local storage
                localStorage.setItem("offCampusIdentifier", offCampusIdentifier);

                //Also want to change params of url in order to render DetailView page from index.js
                //Change URL params
                const currentURL = new URL(window.location);
                currentURL.searchParams.set("page", "detailView");
                //currentURL.searchParams.delete("listings");
                window.location.href = currentURL;
                console.log("New URL:", window.location.href);
            });
        }
    }
}


export function getOffCampusIdentifier() {
    let savedOffCampusIdentifier = localStorage.getItem("offCampusIdentifier");
    return savedOffCampusIdentifier;
}


export function getOnCampusIdentifier() {
    let savedOnCampusIdentifier = localStorage.getItem("onCampusIdentifier");
    return savedOnCampusIdentifier;
}