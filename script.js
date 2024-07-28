'use strict';

const modal= document.querySelectorAll('.modal'); // multiple nodes
const overlay=document.querySelector('.overlay'); //single nodes
const btnCloseModal=document.querySelectorAll('.close-modal'); //multiple nodes
const btnOpenModal=document.querySelectorAll('.show-modal'); //multiple nodes

console.log(btnOpenModal);

for (let index = 0; index < btnOpenModal.length; index++) {
   btnOpenModal[index].addEventListener('click',function(){
    modal[index].style.display='block';
        console.log(btnOpenModal[index].textContent);
        overlay.classList.remove('hidden');
    });
    btnCloseModal[index].addEventListener('click',function(){
        modal[index].style.display='none';
        console.log(btnOpenModal[index].textContent);
        overlay.classList.add('hidden');
    });
}
document.addEventListener('keydown',function(e){
    if (e.key === "Escape") {
        console.log("working");
        modal.forEach(moda => {
          if(moda.style.display==='block')
          {
            console.log(moda);
           moda.style.display='none';
        }
        overlay.classList.add('hidden');
        });
      }
});
