export default function showMoreButton(d) {
    const buttons = document.querySelectorAll(".showMore");
    let showingMore = 0;
    buttons.forEach((p) =>
      p.addEventListener("click", ()=>{
        if (showingMore === 0) {
          p.innerHTML = `<span>${d.numGroup}</span>`
          showingMore = 1;
        }
        else {
          p.innerHTML="<span>SHOW MORE...</span>"
          showingMore = 0;
        }
      })
    )}