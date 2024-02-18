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