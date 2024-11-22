export default function renderBottomOffCampus(p) {
    return `
    <div class="bottom">
    <div class="looking">
      <span>Looking for ${p.numSeek}</span>
    </div>
    <div class="bottomIMGcontainer">
      <div class="bottomIMG">
        <img class="location" src="Assets/postings/location.png"></img>
        <span>${p.address}</span>
      </div>
      <div class="bottomIMG">
        <img class="bed" src="Assets/postings/bed.png" alt="bed"></img>
        <span>${p.numGroup+p.numSeek} People</span>
      </div>
    </div>
    <div class="showMore offCampus">
        <span>SHOW MORE...</span>
    </div>
    </div>
    `;
  };