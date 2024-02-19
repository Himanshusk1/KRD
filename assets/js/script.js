let reachNums = document.getElementsByClassName('reached-nums-data');
let isAlreadyScrolled = false;

const loadAllReachedValues = async()=> {
    for(let i = 0; i < reachNums.length; i++) {
        let e = reachNums[i], inVal = 0;
        let reachVal = e.getAttribute('data-reachedNum');
        let incVal = Math.round(reachVal/20);
        
        let intervals = setInterval(() => {
            if((inVal + incVal) < reachVal) {
                e.innerHTML = inVal+=incVal;
            } else {
                e.innerHTML = reachVal + "+";
                clearInterval(intervals);
            }
        }, 50);
    }
    isAlreadyScrolled = true;
}

window.onscroll = ()=> {
    if(!isAlreadyScrolled) {
        // setTimeout(() => {
            loadAllReachedValues();
            // }, 100);
        }
    }
    


// Testimonials Script...
let btnLeft = document.getElementById('testimonial-btn-left');
let btnRight = document.getElementById('testimonial-btn-right');
let testimonialSection = document.getElementById('testimonials-section');
let testmonialChilds = document.querySelectorAll('.testimonials-section div.col');
let testimonialPos = 0;

const changeTestimonialPosition = (val)=> {
    testimonialPos += val;
    let currPos = (testimonialPos >= 0)? testimonialPos: testimonialPos * -1;
    
    if(currPos > (testmonialChilds.length*300)) {
        testimonialPos -= val;
        return;
    }
    testimonialSection.style.transform = `translateX(${testimonialPos}px)`;
}

btnLeft.addEventListener('click', (e)=> {
    changeTestimonialPosition(-350);
});

btnRight.addEventListener('click', (e)=> {
    changeTestimonialPosition(350);
});
// Testimonials Script...
