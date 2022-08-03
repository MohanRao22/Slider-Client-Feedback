const container = document.querySelector(".container");
console.log(container);
const slide = document.querySelector(".slides");
console.log(slide);
let slides = document.querySelectorAll(".slide");
console.log(slides);
const interval = 2000;

let index = 1;

let clear;

// cloning the element ..
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length-1].cloneNode(true);


firstClone.id = "first-clone"
lastClone.id = "lase-clone"

slide.append(firstClone);
slide.prepend(lastClone);


const slideWidth = slides[index].clientWidth;
console.log(slideWidth);




const startSlide = ()=>{
    if(index >= slides.length-1) return;
  clear =   setInterval(()=>{
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = "1.5s";
      
    },interval)
    console.log(clear);
}



slide.addEventListener("transitionstart",()=>{
   
    slides = document.querySelectorAll(".slide");
console.log(slides);
    if(slides[index].id === firstClone.id){
        // slide.style.transition = "none";
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
})

window.onload = ()=>{
    startSlide();
}



// stop the slider

container.addEventListener("mouseover",()=>{
    slides[index].style.cursor = "pointer";
    console.log(clear);
       clearInterval(clear);
});

container.addEventListener("mouseleave",()=>{
    startSlide();
})