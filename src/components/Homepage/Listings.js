

export function renderOnCampusListings() {

    return `
    <span class="postHeader"><span class="boldFont">On-Campus</span> <span>Roomate Groups</span></span>
    <div class="buttonPlacement">
        <button class="arrow leftArrow outsideArrow" id="onCampusLeftArrow">
            <img src="src/assets/postings/left-arrow.png" alt="Left Arrow">
        </button>
        <button class="arrow rightArrow outsideArrow" id="onCampusRightArrow">
            <img src="src/assets/postings/right-arrow.png" alt="Right Arrow">
        </button>
        <div class="onCampusPosts">
    
        </div>
    </div>`;
}


export function renderOffCampusListings() {

    return `
    <span class="postHeader"><span class="boldFont">Off-Campus</span> <span>Subleases</span></span>
    <div class="buttonPlacement">      
        <button class="arrow leftArrow outsideArrow" id="offCampusLeftArrow">
            <img src="src/assets/postings/left-arrow.png" alt="Left Arrow">
        </button>
        <button class="arrow rightArrow outsideArrow" id="offCampusRightArrow">
            <img src="src/assets/postings/right-arrow.png" alt="Right Arrow">
        </button>
        <div class="offCampusPosts">

        </div>
    </div>`;
}



