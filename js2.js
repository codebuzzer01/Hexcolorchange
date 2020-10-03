const hexNo = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector('.hexBtn');
const bckbg = document.querySelector('body');
const hex = document.querySelector('.hex');
btn.addEventListener('click',changeit);
function changeit(){
    let hexcol = '#';
    for(let i=0;i<6;i++){
        let random = Math.floor(Math.random()*hexNo.length);
        hexcol += hexNo[random];
        console.log(hexcol);
    }
    bckbg.style.background = hexcol;
    hex.innerHTML=hexcol;
}