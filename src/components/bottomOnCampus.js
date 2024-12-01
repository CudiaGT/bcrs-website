export default function renderBottomOnCampus(p) {
    return `
    <div class="bottom">
    <div class="looking">
      <span>Looking for ${p.numSeek}</span>
    </div>
    <div class="bottomIMGcontainer">
      <div class="bottomIMG">
        <img class="location" src="src/assets/postings/location.png"></img>
        <span>${p.dorm}</span>
      </div>
      <div class="bottomIMG">
        <img class="bed" src="src/assets/postings/bed.png" alt="bed"></img>
        <span>${p.numGroup+p.numSeek} People</span>
      </div>
    </div>
    <div class="showMore onCampus">
        <a href="javascript:void(0)" class="showMoreLink"><span>SHOW MORE...</span></a>
    </div>
    </div>
    `;
  };