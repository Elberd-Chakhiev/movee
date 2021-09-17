document.addEventListener('DOMContentLoaded', function() {
    var trigger = document.getElementById('trigger');
    var menu = document.getElementById('menu');
    
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      menu.classList.remove('tw-hidden');
    });
    
});
document.getElementById("close").onclick = function() {
  close()
};
function close() {
  document.getElementById("menu").classList.add("tw-hidden");
}


document.addEventListener('DOMContentLoaded', function(){
  let triggerPrices = document.getElementById('triggerprices')
  let hidntBlock1 = document.getElementById('hidntblock1')
  let hidntBlock2 = document.getElementById('hidntblock2')
  let closePrices = document.getElementById('closeprices')

  triggerPrices.addEventListener('click', function(e) {
    e.preventDefault();
    triggerPrices.classList.add('tw-hidden')
    hidntBlock1.classList.remove('tw-hidden');
    hidntBlock2.classList.remove('tw-hidden');
    closePrices.classList.remove('tw-hidden');
  });
  
  closePrices.addEventListener('click', function(e){
    triggerPrices.classList.remove('tw-hidden');
    hidntBlock1.classList.add('tw-hidden');
    hidntBlock2.classList.add('tw-hidden');
    closePrices.classList.add('tw-hidden');
  });

});



//READMOREBUTTONS==============READMOREBUTTONS==============READMOREBUTTONS==============READMOREBUTTONS==============READMOREBUTTONS==============READMOREBUTTONS==============
// xl:tw-max-h-80 tw-max-h-96
document.addEventListener('DOMContentLoaded', function(){

  let dots = document.getElementById('dots');
  let more = document.getElementById('more');
  let readBtn = document.getElementById('readBtn');
  let hideBtn = document.getElementById('hideBtn');
  
  let ira = document.getElementById('ira');
  // let sveta = document.getElementById('sveta');
  // let olga = document.getElementById('olga');


    readBtn.addEventListener('click', function(e){

      dots.classList.add('tw-hidden');
      readBtn.classList.add('tw-hidden');
      hideBtn.classList.remove('tw-hidden');
      more.classList.remove('tw-hidden');

      ira.classList.remove('xl:tw-max-h-80');
      ira.classList.remove('tw-max-h-96');


    });

    hideBtn.addEventListener('click', function(e){

      dots.classList.remove('tw-hidden');
      readBtn.classList.remove('tw-hidden');
      hideBtn.classList.add('tw-hidden');
      more.classList.add('tw-hidden');
      ira.classList.add('xl:tw-max-h-80');
      ira.classList.add('tw-max-h-96');

    });

});


document.addEventListener('DOMContentLoaded', function(){

  let dots2 = document.getElementById('dots2');
  let more2 = document.getElementById('more2');
  let readBtn2 = document.getElementById('readBtn2');
  let hideBtn2 = document.getElementById('hideBtn2');
  
  // let ira = document.getElementById('ira');
  let sveta = document.getElementById('sveta');
  // let olga = document.getElementById('olga');


    readBtn2.addEventListener('click', function(e){

      dots2.classList.add('tw-hidden');
      readBtn2.classList.add('tw-hidden');
      hideBtn2.classList.remove('tw-hidden');
      more2.classList.remove('tw-hidden');

      sveta.classList.remove('xl:tw-max-h-80');
      sveta.classList.remove('tw-max-h-96');


    });

    hideBtn2.addEventListener('click', function(e){

      dots2.classList.remove('tw-hidden');
      readBtn2.classList.remove('tw-hidden');
      hideBtn2.classList.add('tw-hidden');
      more2.classList.add('tw-hidden');

      
      sveta.classList.add('xl:tw-max-h-80');
      sveta.classList.add('tw-max-h-96');

    });

});

document.addEventListener('DOMContentLoaded', function(){

  let dots3 = document.getElementById('dots3');
  let more3 = document.getElementById('more3');
  let readBtn3 = document.getElementById('readBtn3');
  let hideBtn3 = document.getElementById('hideBtn3');
  
  // let ira = document.getElementById('ira');
  // let sveta = document.getElementById('sveta');
  let olga = document.getElementById('olga');


    readBtn3.addEventListener('click', function(e){

      dots3.classList.add('tw-hidden');
      readBtn3.classList.add('tw-hidden');
      hideBtn3.classList.remove('tw-hidden');
      more3.classList.remove('tw-hidden');

      olga.classList.remove('xl:tw-max-h-80');
      olga.classList.remove('tw-max-h-96');


    });

    hideBtn3.addEventListener('click', function(e){

      dots3.classList.remove('tw-hidden');
      readBtn3.classList.remove('tw-hidden');
      hideBtn3.classList.add('tw-hidden');
      more3.classList.add('tw-hidden');

      
      olga.classList.add('xl:tw-max-h-80');
      olga.classList.add('tw-max-h-96');

    });

});

//READMOREBUTTONS==============READMOREBUTTONS==============READMOREBUTTONS==============READMOREBUTTONS==============READMOREBUTTONS==============READMOREBUTTONS==============

document.addEventListener('DOMContentLoaded', function(){
  let yellowBorder1 = document.getElementById('yellowBorder1');
  let yellowBorder2 = document.getElementById('yellowBorder2');
  let yellowBorder3 = document.getElementById('yellowBorder3');

  
  

  yellowBorder1.addEventListener('click', function(e) {
    e.preventDefault();
    yellowBorder1.classList.add('tw-font-medium');
    yellowBorder2.classList.remove('tw-font-medium');
    yellowBorder3.classList.remove('tw-font-medium');
    
     
    yellowBorder1.classList.add('tw-border-b-2')
    yellowBorder2.classList.remove('tw-border-b-2');
    yellowBorder3.classList.remove('tw-border-b-2');
    yellowBorder1.classList.add('tw-border-yellow-300')
    yellowBorder2.classList.remove('tw-border-yellow-300');
    yellowBorder3.classList.remove('tw-border-yellow-300');

    let gazelle = document.getElementById('gazelle').style.display='flex';
    let cablook = document.getElementById('cablook').style.display='none';
    let gazelle2 = document.getElementById('gazelle2').style.display='none';
  });

  yellowBorder2.addEventListener('click', function(e) {
    e.preventDefault();
    yellowBorder2.classList.add('tw-font-medium');
    yellowBorder1.classList.remove('tw-font-medium');
    yellowBorder3.classList.remove('tw-font-medium');
    
    yellowBorder2.classList.add('tw-border-b-2')
    yellowBorder1.classList.remove('tw-border-b-2');
    yellowBorder3.classList.remove('tw-border-b-2');
    yellowBorder2.classList.add('tw-border-yellow-300')
    yellowBorder1.classList.remove('tw-border-yellow-300');
    yellowBorder3.classList.remove('tw-border-yellow-300');

    let gazelle = document.getElementById('gazelle').style.display='none';
    let cablook = document.getElementById('cablook').style.display='flex';
    let gazelle2 = document.getElementById('gazelle2').style.display='none';

    
    
  });

  yellowBorder3.addEventListener('click', function(e) {
    e.preventDefault();
    yellowBorder3.classList.add('tw-font-medium');
    yellowBorder2.classList.remove('tw-font-medium');
    yellowBorder1.classList.remove('tw-font-medium');
    
    yellowBorder3.classList.add('tw-border-b-2');
    yellowBorder2.classList.remove('tw-border-b-2');
    yellowBorder1.classList.remove('tw-border-b-2');
    yellowBorder3.classList.add('tw-border-yellow-300');
    yellowBorder2.classList.remove('tw-border-yellow-300');
    yellowBorder1.classList.remove('tw-border-yellow-300');

    let gazelle = document.getElementById('gazelle').style.display='none';
    let cablook = document.getElementById('cablook').style.display='none';
    let gazelle2 = document.getElementById('gazelle2').style.display='flex';
  });
  

});



//SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================

 let  yellowBorder1 = document.getElementsByClassName('yellowBorder1'),
 yellowBorder2 = document.getElementById('yellowBorder2'),
       yellowBorder3 = document.getElementById('yellowBorder3'),
       slides = document.getElementsByClassName('slider-item'),

       prev = document.getElementById('prev-btn'),
       next = document.getElementById('next-btn'),
       slideIndex = 1;
    
       showSlides(slideIndex);
    
       function showSlides (n) {
         if (n < 1) {
           slideIndex = slides.length;
         } else if (n > slides.length) {
           slideIndex = 1;
         }
         for (let i = 0; i < slides.length; i++) {
           slides[i].style.display = 'none';
         }
         // for (let i = 0; i < yellowBorder1.length; i++) {
           //   yellowBorder1[i].clasName.remove('tw-border-yellow-300');
           // }
           slides[slideIndex - 1].style.display = 'flex';
           // yellowBorder2[slideIndex - 1].clasName.add('tw-border-yellow-300');
         }
      
         function plusSlides (n) {
           showSlides(slideIndex += n);
         }
         function currentSlide (n) {
           showSlides(slideIndex = n)
         }
      
         prev.onclick = function () {
           plusSlides(-1);
         }
         next.onclick = function () {
           plusSlides(1);
         }
//SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================SLIDER-PLAN-B=================
