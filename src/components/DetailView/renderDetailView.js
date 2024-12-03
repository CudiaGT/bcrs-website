import { renderNavBar } from "../../components/navbar.js";
import { renderFooter } from "../../components/footer.js";
import { getFormData } from "../../../main.js";


function getCurrentMembersMarkup(matchingListing) {
    let membersMarkUp = "";
    let members = matchingListing.members;
    let counter = 1
    for (let index in members) {
        console.log("Member: ", members[index]);
        membersMarkUp += `<p class="current-member">${counter}. <strong>${members[index].name}</strong>, ${members[index].academicYear}</p>`
        counter++;
    }
    console.log(membersMarkUp);
    return membersMarkUp;

}


function renderDetailViewPostOffCampus(matchingListing) {
  return `
  <div class="dvcontainer">
  <div class = "topImage">
    <img src = "${matchingListing.image.src}" alt = "${matchingListing.image.alt}" />
  </div>
  <div class = "bottom groupInfo">
    <div class = "detail-view-wrapper">
      <div class = "personnel-info">
        <div class = "current-members">
          <h2>Group:</h2>
          ${getCurrentMembersMarkup(matchingListing)}
        </div>
        <div class = "numSeeking">
          <h2>Seeking:</h2>
          <h1><strong>${matchingListing.numSeek}</strong></h1>
          <p>more</p>
        </div>
      </div>
      <div class = "timeline">
        <h2> Lease Timeline: </h2>
        <div class = "datesWrapper">
          <p> Start Date: <strong>${matchingListing.period.start.month}/${matchingListing.period.start.day}/${matchingListing.period.start.year}</strong></p>
          <p> End Date: <strong>${matchingListing.period.end.month}/${matchingListing.period.end.day}/${matchingListing.period.end.year}</strong></p>
        </div>
      </div>
    </div>
    <div class = "detail-view-wrapper address-expense">
      <div class = "address">
        <h2>Address:</h2>
        <p> <strong>${matchingListing.address}</strong></p>
      </div>
      <div class = "expenses">
        <h2> Expense Info:</h2>
        <p>Rent: <strong>$${matchingListing.rent} each</strong></p>
        <p>Utilities: <strong>${matchingListing.utilities}</strong> </p>
      </div>
    </div>
  </div>
  </div>
  `;
}

function renderDetailViewPostOnCampus(matchingListing) {
  return `
  <div class="dvcontainer">
  <div class = "topImage">
    <img src = "${matchingListing.image.src}" alt = "${matchingListing.image.alt}" />
  </div>
  <div class = "bottom groupInfo">
    <div class = "detail-view-wrapper">
      <div class = "personnel-info">
        <div class = "current-members">
          <h2>Group:</h2>
          ${getCurrentMembersMarkup(matchingListing)}
        </div>
        <div class = "numSeeking">
          <h2>Seeking:</h2>
          <h1><strong>${matchingListing.numSeek}</strong></h1>
          <p>more</p>
        </div>
      </div>
      <div class = "timeline">
        <div class = "datesWrapper">
        </div>
      </div>
    </div>
    <div class = "detail-view-wrapper address-expense">
      <div class = "address">
        <h2>Address:</h2>
        <p> <strong>${matchingListing.dorm}</strong></p>
      </div>
      <div class = "expenses">
      </div>
    </div>
  </div>
  </div>
  `;
}


export default function renderDetailView(matchingListing) {
    console.log("In renderDetailView.js");

    let listingLocation = localStorage.getItem("listingLocation");
    console.log("listing location:", listingLocation);

    let body = document.querySelector("body");

    //render navbar for detail view page
    body.insertAdjacentHTML("beforeend", renderNavBar());

    if (listingLocation == "oncampus") {

       //insert markup with the details of matchingListing at the end of the body:
      body.insertAdjacentHTML("beforeend", renderDetailViewPostOnCampus(matchingListing));

    } 
    else if (listingLocation == "offcampus") {

      //insert markup with the details of matchingListing at the end of the body:
      body.insertAdjacentHTML("beforeend", renderDetailViewPostOffCampus(matchingListing));
    }

    body.insertAdjacentHTML("beforeend", `<footer>${renderFooter()}</footer>`);

}
