let styleContent = ['flex', 'block', 'block'];
function activeSide(item) {
    let pos = nav.indexOf(item.srcElement);
    findSide(pos);
}
function findSide(pos){
    if (contentBanner.length === nav.length) {        
        for (let index = 0; index < contentBanner.length; index++) {
            if (index === pos) {
                contentBanner[index].style.display = styleContent[index];
            } else {
                contentBanner[index].style.display = 'none';
            }
        }
    }
}
function oneNavPress(item) {
    item.addEventListener('mousedown', activeSide);
}

let contentBanner = document.getElementsByClassName("content");
let nav = Array.from(document.getElementsByClassName("open"));
nav.forEach(oneNavPress);
findSide(0);
