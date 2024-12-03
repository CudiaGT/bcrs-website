export default function showMoreOnCampus() {
    let onCampusCardLinks = document.querySelectorAll(".showMore.onCampus")
    console.log(onCampusCardLinks);
    let onCampusIdentifier;

    for(let link of onCampusCardLinks) {
        link.addEventListener("click", (e) => {
            console.log(link);
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
            onCampusIdentifier = link.id;
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