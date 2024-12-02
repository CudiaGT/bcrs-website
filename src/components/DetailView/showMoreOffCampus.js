    //Add event listener to see if showMoreLink of offcampus posting is clicked. If so, navigate to detailView page
    //grab all offCampusCardLinks
    //TO-DO: For some reason the offCampusCardLinks ("Show More") aren't being selected. Need to fix this.

    export default function showMoreOffCampus() {
      let offCampusCardLinks = document.querySelectorAll(".showMore.offCampus");
      let offCampusIdentifier;
      console.log(offCampusCardLinks);
  
      for (let link of offCampusCardLinks) {
        link.addEventListener("click", (e) => {
          console.log(link)
          e.preventDefault(); //Prevent navigation to link
          //print out element that triggered event
          console.log("Click event triggered on:", e.target);
          console.log("Default prevented");
  
          //when showMoreLink on a card is clicked
          //we want to save any specific info (ie. address) from the card
          //attach event listener to anchor tag within post that checks if SHOW MORE Link has been clicked
          console.log(link)
          console.log(link.parentElement.children[1].firstElementChild.lastElementChild)
          offCampusIdentifier = link.parentElement.children[1].firstElementChild.lastElementChild.textContent; //returns a string
          console.log(offCampusIdentifier);
          console.log("offCampusIdentifier:", offCampusIdentifier);
          //Save identifier to local storage
          localStorage.setItem("offCampusIdentifier", offCampusIdentifier);
          console.log(localStorage);
          const currentURL = new URL(window.location);
          currentURL.searchParams.set("page", "detailView");
          window.location.href = currentURL;
          console.log("New URL:", window.location.href);
        })
      }
    }