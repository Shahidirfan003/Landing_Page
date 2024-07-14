let slider=document.querySelector('#SERVICE .slider');
let option=document.querySelector('.options .main');
let projectDivs=document.querySelectorAll('.projectDivs>div');
let projectImg=document.querySelector('#projectImg>img');

let order=0;

setInterval(()=>{
    slider.scrollLeft=slider.scrollLeft+320;
    order+=2;
    option.setAttribute('class',`pe-2 order-${order} main`)
    if (slider.scrollLeft + slider.clientWidth+100 >= slider.scrollWidth) {
        slider.scrollLeft = 0;
        order=0;
    }
    let activeElement=document.querySelector('.active');
    let nextElement=Check(activeElement)?projectDivs[0]:activeElement.nextElementSibling;
    Change(nextElement);
},3000)

for(let el of projectDivs){
  el.addEventListener('click',()=>{
      Change(el);
    })
}

function Change(el){
    projectDivs.forEach(el=>el.classList.remove('active'));
    el.classList.add('active');
    let imgPath=el.getAttribute('data');
    projectImg.setAttribute('src',imgPath);
}

function Check(el){
 if(el===projectDivs[2]){
    return true;
 }
 else{
    return false;
 }
}