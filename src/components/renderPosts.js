import onCampusPost from "./onCampusPost.js";
import offCampusPost from "./offCampusPost.js";

export default function renderPosts(data) {
    const onCampusPostTag = document.querySelector(".onCampusPosts")
    const offCampusPostTag = document.querySelector(".offCampusPosts")

    let onCampusPostCounter = 0;
    onCampusPostTag.innerHTML = onCampusPost(data.oncampus[onCampusPostCounter]);
    onCampusPostTag.innerHTML += onCampusPost(data.oncampus[onCampusPostCounter + 1]);
    const leftArrowOn = document.querySelector("#onCampusLeftArrow");
    leftArrowOn.addEventListener("click", () => {
        if (onCampusPostCounter === 0) {
            if (data.oncampus.length % 2 === 0) {
                console.log(onCampusPostCounter);
                onCampusPostCounter = data.oncampus.length - 2;
                console.log(onCampusPostCounter);
            }
            else {
                onCampusPostCounter = data.oncampus.length - 1;
            }
        }
        else {
            onCampusPostCounter-=2;
        }
        onCampusPostTag.innerHTML = onCampusPost(data.oncampus[onCampusPostCounter]);
        if (onCampusPostCounter === data.oncampus.length - 1) {
            
        }
        else {
            onCampusPostTag.innerHTML += onCampusPost(data.oncampus[onCampusPostCounter + 1])
        }
    })
    const rightArrowOn = document.querySelector("#onCampusRightArrow");
    rightArrowOn.addEventListener("click", () => {
        if (onCampusPostCounter === data.oncampus.length - 1 || onCampusPostCounter === data.oncampus.length - 2) {
            onCampusPostCounter = 0;
        }
        else {
            onCampusPostCounter+=2;
        }
        onCampusPostTag.innerHTML = onCampusPost(data.oncampus[onCampusPostCounter]);
        if (onCampusPostCounter === data.oncampus.length - 1) {
            
        }
        else {
            onCampusPostTag.innerHTML += onCampusPost(data.oncampus[onCampusPostCounter + 1])
        }
    });

    let offCampusPostCounter = 0;
    offCampusPostTag.innerHTML = offCampusPost(data.offcampus[offCampusPostCounter]);
    offCampusPostTag.innerHTML += offCampusPost(data.offcampus[offCampusPostCounter + 1]);
    const leftArrowOff = document.querySelector("#offCampusLeftArrow");
    leftArrowOff.addEventListener("click", () => {
        if (offCampusPostCounter === 0) {
            if (data.offcampus.length % 2 === 0) {
                offCampusPostCounter = data.offcampus.length - 2;
            }
            else {
                offCampusPostCounter = data.offcampus.length - 1;
            }
        }
        else {
            offCampusPostCounter-=2;
        }
        offCampusPostTag.innerHTML = offCampusPost(data.offcampus[offCampusPostCounter]);
        if (offCampusPostCounter === data.offcampus.length - 1) {
            
        }
        else {
            offCampusPostTag.innerHTML += offCampusPost(data.offcampus[offCampusPostCounter + 1])
        }
    })
    const rightArrowOff = document.querySelector("#offCampusRightArrow");
    rightArrowOff.addEventListener("click", () => {
        if (offCampusPostCounter === data.offcampus.length - 1 || offCampusPostCounter === data.offcampus.length - 2) {
            offCampusPostCounter = 0;
        }
        else {
            offCampusPostCounter+=2;
        }
        offCampusPostTag.innerHTML = offCampusPost(data.offcampus[offCampusPostCounter]);
        if (offCampusPostCounter === data.offcampus.length - 1) {
            
        }
        else {
            offCampusPostTag.innerHTML += offCampusPost(data.offcampus[offCampusPostCounter + 1])
        }
    });
}