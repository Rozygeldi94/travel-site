"use strict";
const boxes = document.querySelectorAll(".content__box");
//paralax --- start
window.onload = function () {
    const parallax = document.querySelector(".parallax");

    if (parallax) {
        const content = document.querySelector(".parallax__container"),
            clouds = document.querySelector(".images-parallax__clouds"),
            mountains = document.querySelector(".images-parallax__mountains"),
            human = document.querySelector(".images-parallax__human");

        const forClouds = 40,
            forMountains = 20,
            forHuman = 10;

        const speed = 0.05;

        let positionX = 0,
            positionY = 0;

        let cordinateX = 0,
            cordinateY = 0;
        function setParallax() {
            const disX = cordinateX - positionX,
                disY = cordinateY - positionY;

            positionX = positionX + disX * speed;
            positionY = positionY + disY * speed;

            clouds.style.cssText = `transform: translate(${
                positionX / forClouds
            }%, ${positionY / forClouds}%);`;
            mountains.style.cssText = `transform: translate(${
                positionX / forMountains
            }%, ${positionY / forMountains}%);`;
            human.style.cssText = `transform: translate(${
                positionX / forHuman
            }%, ${positionY / forHuman}%);`;
            requestAnimationFrame(setParallax);
        }
        setParallax();
        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth,
                parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2,
                coordY = e.pageY - parallaxHeight / 2;

            cordinateX = (coordX / parallaxWidth) * 100;
            cordinateY = (coordY / parallaxHeight) * 100;
        });

        //parallax scrolling --- start
        let thresholdsets = [];

        for (let i = 0; i <= 1.0; i += 0.005) {
            thresholdsets.push(i);
        }

        const callback = function (entries, observer) {
            const scrolTopPercent =
                (window.pageYOffset / parallax.offsetHeight) * 100;
            setParallaxItemStyle(scrolTopPercent);
        };

        const observer = new IntersectionObserver(callback, {
            threshold: thresholdsets,
        });

        observer.observe(document.querySelector(".content"));

        function setParallaxItemStyle(scrolTopPercent) {
            content.style.cssText = `transform: translate(0%, -${
                scrolTopPercent / 9
            }%);`;

            mountains.parentElement.style.cssText = `transform: translate(0%, -${
                scrolTopPercent / 6
            }%);`;
            human.parentElement.style.cssText = `transform: translate(0%, -${
                scrolTopPercent / 3
            }%);`;
        }
    }
};

//Skils Content --- start

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes();
