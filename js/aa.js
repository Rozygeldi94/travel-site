/* const scrolltoTop = document.querySelector(".scrolltoTop");
    scrollSvg = document.querySelector(".scroll-path");
    pathLength = scrollSvg.getTotalLength()
    offset = 100

scrollSvg.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollSvg.style.transition = "stroke-dashoffset 20ms";

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const calcScrollValue = () => {
    let calcHeight = document.documentElement.scrollHeight - window.innerHeight;
    let dashoffset = pathLength - (getTop() * pathLength / calcHeight);

    scrollSvg.style.strokeDashoffset = dashoffset;
};

window.addEventListener("scroll", () => {
    calcScrollValue();
    if (getTop() > offset) {
        scrolltoTop.classList.add("_active");
    } else {
        scrolltoTop.classList.remove("_active");
    }
});
scrolltoTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})
 */









