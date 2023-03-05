//typed.js -- 1'st text ----start
const typedJs = document.querySelector("#type");
setTimeout(() => {
    typedJs.style.visibility = "visible";
}, 5000);
let typedOne = new Typed("#intro__title", {
    strings: ["Discover Amazing places in"],
    typeSpeed: 100,
    startDelay: 1000,
    delaySpeed: 140,
    loop: false,
});

//typed.js -- second text (cities) ---start
let typedTwo = new Typed("#type", {
    strings: [
        "USA",
        "China",
        "Spain",
        "Japan",
        "Maldives",
        "Turkiye",
        "UK",
        "France",
        "Malaysia",
        "Germany",
    ],
    typeSpeed: 100,
    delaySpeed: 20,
    loop: true,
});
//form input Date--start
document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();
    if (date.getDate() < 10 && date.getMonth() < 10) {
        const formDateInput = document.querySelector(".form-date input");
        formDateInput.value = `${date.getFullYear()}-0${
            date.getMonth() + 1
        }-0${date.getDate()}`;
        formDateInput.setAttribute(
            "min",
            `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`
        );
    }
});

//person count -section intro --start
const personIncrement = document.querySelector(".person-increment"),
    personDecrement = document.querySelector(".person-decrement"),
    countResult = document.querySelector(".count-result");

let count = 1;

personIncrement.addEventListener("click", () => {
    count++;
    if (countResult.textContent >= 1) {
        personDecrement.classList.remove("clicked");
        personIncrement.classList.add("clicked");
        countResult.innerHTML = count;
    }
    if (countResult.textContent >= 30) {
        count = 30;
        countResult.innerHTML = count;
    }
});
personDecrement.addEventListener("click", () => {
    count--;
    if (countResult.textContent > 1) {
        personIncrement.classList.remove("clicked");
        personDecrement.classList.add("clicked");
        countResult.innerHTML = count;
    }
    if (countResult.textContent <= 1) {
        count = 1;
        countResult.innerHTML = count;
    }
});
//scroll top btn --start
const scrollBtn = document.querySelector(".scrollToTop ");
const progressPath = document.querySelector(".scrollToTop path");
const pathLength = progressPath.getTotalLength();

progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
progressPath.style.transition = "stroke-dashoffset 20ms";

const scrollPage = () =>
    window.pageYOffset || document.documentElement.scrollTop;

const updateProgress = () => {
    let calcHeight = document.documentElement.scrollHeight - window.innerHeight;
    let dashoffset = pathLength - (scrollPage() * pathLength) / calcHeight;
    progressPath.style.strokeDashoffset = dashoffset;
};
updateProgress();

window.addEventListener("scroll", () => {
    updateProgress();
    if (scrollPage() > 100) {
        scrollBtn.classList.add("_active");
    } else {
        scrollBtn.classList.remove("_active");
    }
});
scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// burger menu  ---start

const hamburger = document.querySelector("#hamburger");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamburger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamburger.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}
function renderPopup() {
    popup.appendChild(menu);
}

function closeOnClick() {
    popup.classList.remove("open");
    hamburger.classList.remove("active");
    body.classList.remove("noscroll");
}

//Benefits slider --start

let swiper = new Swiper(".slide-content", {
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1.1,
        },
        400: {
            slidesPerView: 1.5,
        },
        500: {
            slidesPerView: 2,
        },

        700: {
            slidesPerView: 2.5,
        },
        950: {
            slidesPerView: 3.3,
        },
    },
});
//Tours  packages --swipper-start

let swiper2 = new Swiper(".swiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 3000,
    },
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
    },
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
});

// City search filter --start
const weatherCar = document.querySelectorAll(".weather-card");
const search = document.querySelector("#search");
const productName = document.querySelectorAll(".city");
let currentItem = 6;
document.querySelector(".cities-length").innerHTML = productName.length;

function filterProducts() {
    const input = document.getElementById("search");
    const filter = input.value.toUpperCase();
    const parent = document.getElementsByClassName("left");

    for (let i = 0; i < parent.length; i++) {
        let a = parent[i].getElementsByClassName("city")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            weatherCar[i].classList.add("_active");
            weatherCar[i].classList.remove("hidden");
        } else {
            weatherCar[i].classList.add("hidden");
            weatherCar[i].classList.remove("_active");
        }
    }
    const activeCardCities = document.querySelectorAll("._active");
    const btn = document.querySelector(".btn-block");

    if (activeCardCities.length >= 7) {
        let currentItem = 6;
        const sixCard = Array.from(activeCardCities).slice(7);
        sixCard.forEach((card) => {
            card.classList.remove("_active");
            card.classList.add("hidden");
        });
    }

    if (activeCardCities.length > 6) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
    currentItem = 6;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".all").classList.add("active");
}
search.addEventListener("keyup", filterProducts);

//filter card--start
document.addEventListener("DOMContentLoaded", function (event) {
    let element = document.querySelectorAll(".btn-filter");

    if (element) {
        element.forEach(function (el, key) {
            el.addEventListener("click", function () {
                el.classList.toggle("active");

                element.forEach(function (ell, els) {
                    if (key !== els) {
                        ell.classList.remove("active");
                    }
                });
            });
        });
    }
});

const btns = document.querySelectorAll(".btn-filter");
const storeProducts = document.querySelectorAll(".weather-card");
const filterBox = document.querySelector(".filter-box");
let loadMoreBtn1 = document.querySelector(".load-more-btn");

filterBox.addEventListener("click", (e) => {
    const btn = document.querySelector(".btn-block");
    if ((e.target.tagName = "A")) {
        e.preventDefault();
        const filter = e.target.dataset.filter;

        storeProducts.forEach((product) => {
            if (filter === "all") {
                currentItem = 6;
                product.classList.remove("hidden");
                product.classList.add("_active");
                search.value = "";
                const activeCardCities = document.querySelectorAll("._active");

                if (activeCardCities.length >= 6) {
                    const sixCard = Array.from(activeCardCities).slice(7);
                    sixCard.forEach((card) => {
                        card.classList.remove("_active");
                        card.classList.add("hidden");
                    });
                }
                if (activeCardCities.length >= 6) {
                    btn.style.display = "block";
                } else {
                    btn.style.display = "none";
                }
            } else {
                btn.style.display = "none";
                search.value = "";
                if (product.classList.contains(filter)) {
                    product.classList.remove("hidden");
                    product.classList.add("_active");
                } else {
                    if (e.target.tagName === "A") {
                        product.classList.remove("_active");
                        product.classList.add("hidden");
                    }
                }
            }
        });
        const activeCardCities = document.querySelectorAll("._active");
    }
});
//api weather --start

let istanbul =
    "https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let antalya =
    "https://api.openweathermap.org/data/2.5/weather?q=antalya&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let ankara =
    "https://api.openweathermap.org/data/2.5/weather?q=ankara&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let male =
    "https://api.openweathermap.org/data/2.5/weather?q=male&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let addu =
    "https://api.openweathermap.org/data/2.5/weather?q=addu&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let miami =
    "https://api.openweathermap.org/data/2.5/weather?q=miami&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let los_angeles =
    "https://api.openweathermap.org/data/2.5/weather?q=los%20angeles&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let california =
    "https://api.openweathermap.org/data/2.5/weather?q=california&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let new_york =
    "https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let washington =
    "https://api.openweathermap.org/data/2.5/weather?q=washington&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let chicago =
    "https://api.openweathermap.org/data/2.5/weather?q=chicago&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let london =
    "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let manchester =
    "https://api.openweathermap.org/data/2.5/weather?q=manchester&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let liverpool =
    "https://api.openweathermap.org/data/2.5/weather?q=liverpool&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let beijing =
    "https://api.openweathermap.org/data/2.5/weather?q=beijing&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let shanghai =
    "https://api.openweathermap.org/data/2.5/weather?q=shanghai&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let chongqing =
    "https://api.openweathermap.org/data/2.5/weather?q=chongqing&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let guangzhou =
    "https://api.openweathermap.org/data/2.5/weather?q=guangzhou&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let marseille =
    "https://api.openweathermap.org/data/2.5/weather?q=marseille&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let lyon =
    "https://api.openweathermap.org/data/2.5/weather?q=lyon&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let paris =
    "https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let barcelona =
    "https://api.openweathermap.org/data/2.5/weather?q=barcelona&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let madrid =
    "https://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let seville =
    "https://api.openweathermap.org/data/2.5/weather?q=seville&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let valencia =
    "https://api.openweathermap.org/data/2.5/weather?q=valencia&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let berlin =
    "https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let hamburg =
    "https://api.openweathermap.org/data/2.5/weather?q=hamburg&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let munich =
    "https://api.openweathermap.org/data/2.5/weather?q=munich&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let frankfurt =
    "https://api.openweathermap.org/data/2.5/weather?q=frankfurt&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let cologne =
    "https://api.openweathermap.org/data/2.5/weather?q=cologne&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let tokyo =
    "https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let kyoto =
    "https://api.openweathermap.org/data/2.5/weather?q=kyoto&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let osaka =
    "https://api.openweathermap.org/data/2.5/weather?q=osaka&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let kuala_lampur =
    "https://api.openweathermap.org/data/2.5/weather?q=kuala%20lumpur&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let george_town =
    "https://api.openweathermap.org/data/2.5/weather?q=georgetown&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";
let malacca =
    "https://api.openweathermap.org/data/2.5/weather?q=malacca&units=metric&appid=2df66a44e37773d2eab92948d8ea0e91";

fetch(istanbul)
    .then((resp) => resp.json())
    .then((data) => {
        let timeIstanbul = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Istanbul",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteIstanbul = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Istanbul",
            minute: "numeric",
        });
        let dateIstanbul = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Istanbul",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Istanbul").innerHTML = timeIstanbul;
        document.querySelector(".date-Istanbul").innerHTML = dateIstanbul;
        if (timeIstanbul.substring(0, 2) == 24) {
            if (minuteIstanbul.length == 1) {
                document.querySelector(
                    ".clock-Istanbul"
                ).innerHTML = `00:0${minuteIstanbul}`;
            }
            if (minuteIstanbul.length == 2) {
                document.querySelector(
                    ".clock-Istanbul"
                ).innerHTML = `00:${minuteIstanbul}`;
            }
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Istanbul").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Istanbul").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Istanbul").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Istanbul").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeIstanbul.substring(0, 2) >= 19 ||
                timeIstanbul.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Istanbul").style.width =
                    "40px";
                document.querySelector(".weather-icon-Istanbul").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Istanbul").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Istanbul").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Istanbul").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Istanbul"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Istanbul"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(antalya)
    .then((resp) => resp.json())
    .then((data) => {
        let timeAntalya = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Istanbul",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteAntalya = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Istanbul",
            minute: "numeric",
        });
        let dateAntalya = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Istanbul",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Antalya").innerHTML = timeAntalya;
        document.querySelector(".date-Antalya").innerHTML = dateAntalya;
        if (timeAntalya.substring(0, 2) == 24) {
            if (minuteAntalya.length == 1) {
                document.querySelector(
                    ".clock-Antalya"
                ).innerHTML = `00:0${minuteAntalya}`;
            }
            if (minuteAntalya.length == 2) {
                document.querySelector(
                    ".clock-Antalya"
                ).innerHTML = `00:${minuteAntalya}`;
            }
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Antalya").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Antalya").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Antalya").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Antalya").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeAntalya.substring(0, 2) >= 19 ||
                timeAntalya.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Antalya").style.width =
                    "40px";
                document.querySelector(".weather-icon-Antalya").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Antalya").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Antalya").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Antalya").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Antalya").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Antalya"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(ankara)
    .then((resp) => resp.json())
    .then((data) => {
        let timeAnkara = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Istanbul",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteAnkara = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Istanbul",
            minute: "numeric",
        });
        let dateAnkara = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Istanbul",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Ankara").innerHTML = timeAnkara;
        document.querySelector(".date-Ankara").innerHTML = dateAnkara;
        if (timeAnkara.substring(0, 2) == 24) {
            if (minuteAnkara.length == 1) {
                document.querySelector(
                    ".clock-Ankara"
                ).innerHTML = `00:0${minuteAnkara}`;
            }
            if (minuteAnkara.length == 2) {
                document.querySelector(
                    ".clock-Ankara"
                ).innerHTML = `00:${minuteAnkara}`;
            }
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Ankara").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Ankara").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Ankara").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Ankara").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeAnkara.substring(0, 2) >= 19 ||
                timeAnkara.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Ankara").style.width =
                    "40px";
                document.querySelector(".weather-icon-Ankara").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Ankara").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Ankara").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Ankara").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Ankara").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Ankara"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(male)
    .then((resp) => resp.json())
    .then((data) => {
        let timeMale = new Date().toLocaleString("en-US", {
            timeZone: "Indian/Maldives",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteMale = new Date().toLocaleString("en-US", {
            timeZone: "Indian/Maldives",
            minute: "numeric",
        });

        let dateMale = new Date().toLocaleString("en-US", {
            timeZone: "Indian/Maldives",
            dateStyle: "medium",
        });
        document.querySelector(".clock-Male").innerHTML = timeMale;
        document.querySelector(".date-Male").innerHTML = dateMale;

        if (timeMale.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Male"
            ).innerHTML = `00:${minuteMale}`;
        }

        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Male").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Male").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Male").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Male").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeMale.substring(0, 2) >= 19 ||
                timeMale.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Male").style.width =
                    "40px";
                document.querySelector(".weather-icon-Male").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Male").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Male").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Male").src =
                "./templates/img/weather-svg/snow.svg";
        }
        let celcius = Math.round(data.main.temp) - 1;
        document.querySelector(".tempreture-Male").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Male"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(male) // I use male API also for Addu city too because Addu API not found
    .then((resp) => resp.json())
    .then((data) => {
        let timeAddu = new Date().toLocaleString("en-US", {
            timeZone: "Indian/Maldives",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteAddu = new Date().toLocaleString("en-US", {
            timeZone: "Indian/Maldives",
            minute: "numeric",
        });

        let dateAddu = new Date().toLocaleString("en-US", {
            timeZone: "Indian/Maldives",
            dateStyle: "medium",
        });
        document.querySelector(".clock-Addu").innerHTML = timeAddu;
        document.querySelector(".date-Addu").innerHTML = dateAddu;

        if (timeAddu.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Addu"
            ).innerHTML = `00:${minuteAddu}`;
        }

        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Addu").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Addu").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Addu").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Addu").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeAddu.substring(0, 2) >= 19 ||
                timeAddu.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Addu").style.width =
                    "40px";
                document.querySelector(".weather-icon-Addu").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Addu").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Addu").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Addu").src =
                "./templates/img/weather-svg/snow.svg";
        }
        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Addu").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Addu"
        ).innerHTML = `Addu city, ${data.sys.country}`;
    });
fetch(miami)
    .then((resp) => resp.json())
    .then((data) => {
        let timeMiami = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteMiami = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            minute: "numeric",
        });
        let dateMiami = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Miami").innerHTML = timeMiami;
        document.querySelector(".date-Miami").innerHTML = dateMiami;
        if (timeMiami.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Miami"
            ).innerHTML = `00:${minuteMiami}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Miami").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Miami").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Miami").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Miami").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeMiami.substring(0, 2) >= 19 ||
                timeMiami.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Miami").style.width =
                    "40px";
                document.querySelector(".weather-icon-Miami").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Miami").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Miami").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Miami").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Miami").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Miami"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(los_angeles)
    .then((resp) => resp.json())
    .then((data) => {
        let timeLosAngeles = new Date().toLocaleString("en-US", {
            timeZone: "America/Vancouver",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteLosAngeles = new Date().toLocaleString("en-US", {
            timeZone: "America/Vancouver",
            minute: "numeric",
        });
        let dateLosAngeles = new Date().toLocaleString("en-US", {
            timeZone: "America/Vancouver",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Los-Angeles").innerHTML = timeLosAngeles;
        document.querySelector(".date-Los-Angeles").innerHTML = dateLosAngeles;
        if (timeLosAngeles.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Los-Angeles"
            ).innerHTML = `00:${minuteLosAngeles}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Los-Angeles").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Los-Angeles").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Los-Angeles").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Los-Angeles").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeLosAngeles.substring(0, 2) >= 19 ||
                timeLosAngeles.substring(0, 2) <= 7
            ) {
                document.querySelector(
                    ".weather-icon-Los-Angeles"
                ).style.width = "40px";
                document.querySelector(".weather-icon-Los-Angeles").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Los-Angeles").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Los-Angeles").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Los-Angeles").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Los-Angeles"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Los-Angeles"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(california)
    .then((resp) => resp.json())
    .then((data) => {
        let timeCalifornia = new Date().toLocaleString("en-US", {
            timeZone: "America/Vancouver",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteCalifornia = new Date().toLocaleString("en-US", {
            timeZone: "America/Vancouver",
            minute: "numeric",
        });
        let dateCalifornia = new Date().toLocaleString("en-US", {
            timeZone: "America/Vancouver",
            dateStyle: "medium",
        });

        document.querySelector(".clock-California").innerHTML = timeCalifornia;
        document.querySelector(".date-California").innerHTML = dateCalifornia;
        if (timeCalifornia.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-California"
            ).innerHTML = `00:${minuteCalifornia}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-California").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-California").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-California").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-California").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeCalifornia.substring(0, 2) >= 19 ||
                timeCalifornia.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-California").style.width =
                    "40px";
                document.querySelector(".weather-icon-California").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-California").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-California").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-California").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-California"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-California"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(new_york)
    .then((resp) => resp.json())
    .then((data) => {
        let timeNew_York = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteNew_York = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            minute: "numeric",
        });
        let dateNew_York = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            dateStyle: "medium",
        });

        document.querySelector(".clock-New-York").innerHTML = timeNew_York;
        document.querySelector(".date-New-York").innerHTML = dateNew_York;
        if (timeNew_York.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-New-York"
            ).innerHTML = `00:${minuteNew_York}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-New-York").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-New-York").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-New-York").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-New-York").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeNew_York.substring(0, 2) >= 19 ||
                timeNew_York.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-New-York").style.width =
                    "40px";
                document.querySelector(".weather-icon-New-York").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-New-York").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-New-York").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-New-York").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-New-York"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-New-York"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(washington)
    .then((resp) => resp.json())
    .then((data) => {
        let timeWashington = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteWashington = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            minute: "numeric",
        });
        let dateWashington = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Washington").innerHTML = timeWashington;
        document.querySelector(".date-Washington").innerHTML = dateWashington;
        if (timeWashington.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Washington"
            ).innerHTML = `00:${minuteWashington}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Washington").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Washington").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Washington").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Washington").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeWashington.substring(0, 2) >= 19 ||
                timeWashington.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Washington").style.width =
                    "40px";
                document.querySelector(".weather-icon-Washington").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Washington").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Washington").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Washington").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Washington"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Washington"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(chicago)
    .then((resp) => resp.json())
    .then((data) => {
        let timeChicago = new Date().toLocaleString("en-US", {
            timeZone: "America/Chicago",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteChicago = new Date().toLocaleString("en-US", {
            timeZone: "America/Chicago",
            minute: "numeric",
        });
        let dateChicago = new Date().toLocaleString("en-US", {
            timeZone: "America/Chicago",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Chicago").innerHTML = timeChicago;
        document.querySelector(".date-Chicago").innerHTML = dateChicago;
        if (timeChicago.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Chicago"
            ).innerHTML = `00:${minuteChicago}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Chicago").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Chicago").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Chicago").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Chicago").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeChicago.substring(0, 2) >= 19 ||
                timeChicago.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Chicago").style.width =
                    "40px";
                document.querySelector(".weather-icon-Chicago").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Chicago").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Chicago").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Chicago").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Chicago").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Chicago"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(london)
    .then((resp) => resp.json())
    .then((data) => {
        let timeLondon = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteLondon = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London",
            minute: "numeric",
        });
        let dateLondon = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London",
            dateStyle: "medium",
        });

        document.querySelector(".clock-London").innerHTML = timeLondon;
        document.querySelector(".date-London").innerHTML = dateLondon;
        if (timeLondon.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-London"
            ).innerHTML = `00:${minuteLondon}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-London").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-London").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-London").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-London").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeLondon.substring(0, 2) >= 19 ||
                timeLondon.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-London").style.width =
                    "40px";
                document.querySelector(".weather-icon-London").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-London").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-London").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-London").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-London").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-London"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(manchester)
    .then((resp) => resp.json())
    .then((data) => {
        let timeManchester = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteManchester = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London",
            minute: "numeric",
        });
        let dateManchester = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Manchester").innerHTML = timeManchester;
        document.querySelector(".date-Manchester").innerHTML = dateManchester;
        if (timeManchester.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Manchester"
            ).innerHTML = `00:${minuteManchester}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Manchester").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Manchester").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Manchester").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Manchester").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeManchester.substring(0, 2) >= 19 ||
                timeManchester.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Manchester").style.width =
                    "40px";
                document.querySelector(".weather-icon-Manchester").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Manchester").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Manchester").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Manchester").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Manchester"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Manchester"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(liverpool)
    .then((resp) => resp.json())
    .then((data) => {
        let timeLiverpool = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteLiverpool = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London",
            minute: "numeric",
        });
        let dateLiverpool = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Liverpool").innerHTML = timeLiverpool;
        document.querySelector(".date-Liverpool").innerHTML = dateLiverpool;
        if (timeLiverpool.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Liverpool"
            ).innerHTML = `00:${minuteLiverpool}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Liverpool").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Liverpool").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Liverpool").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Liverpool").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeLiverpool.substring(0, 2) >= 19 ||
                timeLiverpool.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Liverpool").style.width =
                    "40px";
                document.querySelector(".weather-icon-Liverpool").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Liverpool").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Liverpool").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Liverpool").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Liverpool"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Liverpool"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(beijing)
    .then((resp) => resp.json())
    .then((data) => {
        let timeBeijing = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteBeijing = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            minute: "numeric",
        });
        let dateBeijing = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Beijing").innerHTML = timeBeijing;
        document.querySelector(".date-Beijing").innerHTML = dateBeijing;
        if (timeBeijing.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Beijing"
            ).innerHTML = `00:${minuteBeijing}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Beijing").src =
                "./templates/img/weather-svg/cloudy.svg";
            if (data.weather[0].main == "Thunderstorm") {
                document.querySelector(".weather-icon-Beijing").src =
                    "./templates/img/weather-svg/thunderstorm.svg";
            }
            if (data.weather[0].main == "Mist") {
                document.querySelector(".weather-icon-Beijing").src =
                    "./templates/img/weather-svg/mist.svg";
            }
            if (data.weather[0].main == "Drizzle") {
                document.querySelector(".weather-icon-Beijing").src =
                    "./templates/img/weather-svg/drizzle.svg";
            }
            ("./templates/img/weather-svg/cloudy.svg");
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeBeijing.substring(0, 2) >= 19 ||
                timeBeijing.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Beijing").style.width =
                    "40px";
                document.querySelector(".weather-icon-Beijing").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Beijing").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Beijing").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Beijing").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Beijing").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Beijing"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(shanghai)
    .then((resp) => resp.json())
    .then((data) => {
        let timeShanghai = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteShanghai = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            minute: "numeric",
        });
        let dateShanghai = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Shanghai").innerHTML = timeShanghai;
        document.querySelector(".date-Shanghai").innerHTML = dateShanghai;
        if (timeShanghai.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Shanghai"
            ).innerHTML = `00:${minuteShanghai}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Shanghai").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Shanghai").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Shanghai").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Shanghai").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeShanghai.substring(0, 2) >= 19 ||
                timeShanghai.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Shanghai").style.width =
                    "40px";
                document.querySelector(".weather-icon-Shanghai").style.width =
                    "40px";
                document.querySelector(".weather-icon-Shanghai").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Shanghai").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Shanghai").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Shanghai").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Shanghai"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Shanghai"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(chongqing)
    .then((resp) => resp.json())
    .then((data) => {
        let timeChongqing = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteChongqing = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            minute: "numeric",
        });
        let dateChongqing = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Chongqing").innerHTML = timeChongqing;
        document.querySelector(".date-Chongqing").innerHTML = dateChongqing;
        if (timeChongqing.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Chongqing"
            ).innerHTML = `00:${minuteChongqing}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Chongqing").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Chongqing").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Chongqing").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Chongqing").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeChongqing.substring(0, 2) >= 19 ||
                timeChongqing.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Chongqing").style.width =
                    "40px";
                document.querySelector(".weather-icon-Chongqing").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Chongqing").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Chongqing").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Chongqing").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Chongqing"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Chongqing"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(guangzhou)
    .then((resp) => resp.json())
    .then((data) => {
        let timeGuangzhou = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteGuangzhou = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            minute: "numeric",
        });
        let dateGuangzhou = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Guangzhou").innerHTML = timeGuangzhou;
        document.querySelector(".date-Guangzhou").innerHTML = dateGuangzhou;
        if (timeGuangzhou.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Guangzhou"
            ).innerHTML = `00:${minuteGuangzhou}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Guangzhou").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Guangzhou").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Guangzhou").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Guangzhou").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeGuangzhou.substring(0, 2) >= 19 ||
                timeGuangzhou.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Guangzhou").style.width =
                    "40px";
                document.querySelector(".weather-icon-Guangzhou").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Guangzhou").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Guangzhou").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Guangzhou").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Guangzhou"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Guangzhou"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(marseille)
    .then((resp) => resp.json())
    .then((data) => {
        let timeMarseille = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteMarseille = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateMarseille = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Marseille").innerHTML = timeMarseille;
        document.querySelector(".date-Marseille").innerHTML = dateMarseille;
        if (timeMarseille.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Marseille"
            ).innerHTML = `00:${minuteMarseille}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Marseille").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Marseille").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Marseille").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Marseille").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeMarseille.substring(0, 2) >= 19 ||
                timeMarseille.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Marseille").style.width =
                    "40px";
                document.querySelector(".weather-icon-Marseille").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Marseille").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Marseille").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Marseille").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Marseille"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Marseille"
        ).innerHTML = `${data.name.substring(18)}, ${data.sys.country}`;
    });
fetch(lyon)
    .then((resp) => resp.json())
    .then((data) => {
        let timeLyon = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteLyon = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateLyon = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Lyon").innerHTML = timeLyon;
        document.querySelector(".date-Lyon").innerHTML = dateLyon;
        if (timeLyon.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Lyon"
            ).innerHTML = `00:${minuteLyon}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Lyon").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Lyon").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Lyon").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Lyon").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeLyon.substring(0, 2) >= 19 ||
                timeLyon.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Lyon").style.width =
                    "40px";
                document.querySelector(".weather-icon-Lyon").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Lyon").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Lyon").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Lyon").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Lyon").innerHTML = `${celcius}°`;
        document.querySelector(".city-Lyon").innerHTML = `${data.name.substring(
            18
        )}, ${data.sys.country}`;
    });
fetch(paris)
    .then((resp) => resp.json())
    .then((data) => {
        let timeParis = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteParis = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateParis = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Paris").innerHTML = timeParis;
        document.querySelector(".date-Paris").innerHTML = dateParis;
        if (timeParis.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Paris"
            ).innerHTML = `00:${minuteParis}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Paris").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Paris").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Paris").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Paris").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeParis.substring(0, 2) >= 19 ||
                timeParis.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Paris").style.width =
                    "40px";
                document.querySelector(".weather-icon-Paris").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Paris").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Paris").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Paris").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Paris").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Paris"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(barcelona)
    .then((resp) => resp.json())
    .then((data) => {
        let timeBarcelona = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteBarcelona = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateBarcelona = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Barcelona").innerHTML = timeBarcelona;
        document.querySelector(".date-Barcelona").innerHTML = dateBarcelona;
        if (timeBarcelona.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Barcelona"
            ).innerHTML = `00:${minuteBarcelona}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Barcelona").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Barcelona").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Barcelona").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Barcelona").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeBarcelona.substring(0, 2) >= 19 ||
                timeBarcelona.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Barcelona").style.width =
                    "40px";
                document.querySelector(".weather-icon-Barcelona").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Barcelona").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Barcelona").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Barcelona").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Barcelona"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Barcelona"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(madrid)
    .then((resp) => resp.json())
    .then((data) => {
        let timeMadrid = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteMadrid = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateMadrid = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Madrid").innerHTML = timeMadrid;
        document.querySelector(".date-Madrid").innerHTML = dateMadrid;
        if (timeMadrid.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Madrid"
            ).innerHTML = `00:${minuteMadrid}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Madrid").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Madrid").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Madrid").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Madrid").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeMadrid.substring(0, 2) >= 19 ||
                timeMadrid.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Madrid").style.width =
                    "40px";
                document.querySelector(".weather-icon-Madrid").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Madrid").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Madrid").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Madrid").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Madrid").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Madrid"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(valencia)
    .then((resp) => resp.json())
    .then((data) => {
        let timeValencia = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteValencia = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateValencia = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Valencia").innerHTML = timeValencia;
        document.querySelector(".date-Valencia").innerHTML = dateValencia;
        if (timeValencia.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Valencia"
            ).innerHTML = `00:${minuteValencia}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Valencia").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Valencia").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Valencia").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Valencia").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeValencia.substring(0, 2) >= 19 ||
                timeValencia.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Valencia").style.width =
                    "40px";
                document.querySelector(".weather-icon-Valencia").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Valencia").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Valencia").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Valencia").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Valencia"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Valencia"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(seville)
    .then((resp) => resp.json())
    .then((data) => {
        let timeSeville = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteSeville = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateSeville = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Seville").innerHTML = timeSeville;
        document.querySelector(".date-Seville").innerHTML = dateSeville;
        if (timeSeville.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Seville"
            ).innerHTML = `00:${minuteSeville}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Seville").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Seville").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Seville").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Seville").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeSeville.substring(0, 2) >= 19 ||
                timeSeville.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Seville").style.width =
                    "40px";
                document.querySelector(".weather-icon-Seville").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Seville").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Seville").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Seville").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Seville").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Seville"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(berlin)
    .then((resp) => resp.json())
    .then((data) => {
        let timeBerlin = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteBerlin = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateBerlin = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Berlin").innerHTML = timeBerlin;
        document.querySelector(".date-Berlin").innerHTML = dateBerlin;
        if (timeBerlin.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Berlin"
            ).innerHTML = `00:${minuteBerlin}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Berlin").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Berlin").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Berlin").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Berlin").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeBerlin.substring(0, 2) >= 19 ||
                timeBerlin.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Berlin").style.width =
                    "40px";
                document.querySelector(".weather-icon-Berlin").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Berlin").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Berlin").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Berlin").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Berlin").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Berlin"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(munich)
    .then((resp) => resp.json())
    .then((data) => {
        let timeMunich = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteMunich = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateMunich = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Munich").innerHTML = timeMunich;
        document.querySelector(".date-Munich").innerHTML = dateMunich;
        if (timeMunich.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Munich"
            ).innerHTML = `00:${minuteMunich}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Munich").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Munich").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Munich").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Munich").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeMunich.substring(0, 2) >= 19 ||
                timeMunich.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Munich").style.width =
                    "40px";
                document.querySelector(".weather-icon-Munich").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Munich").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Munich").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Munich").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Munich").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Munich"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(frankfurt)
    .then((resp) => resp.json())
    .then((data) => {
        let timeFrankfurt = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteFrankfurt = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateFrankfurt = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Frankfurt").innerHTML = timeFrankfurt;
        document.querySelector(".date-Frankfurt").innerHTML = dateFrankfurt;
        if (timeFrankfurt.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Frankfurt"
            ).innerHTML = `00:${minuteFrankfurt}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Frankfurt").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Frankfurt").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Frankfurt").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Frankfurt").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeFrankfurt.substring(0, 2) >= 19 ||
                timeFrankfurt.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Frankfurt").style.width =
                    "40px";
                document.querySelector(".weather-icon-Frankfurt").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Frankfurt").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Frankfurt").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Frankfurt").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Frankfurt"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Frankfurt"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(hamburg)
    .then((resp) => resp.json())
    .then((data) => {
        let timeHamburg = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteHamburg = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateHamburg = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Hamburg").innerHTML = timeHamburg;
        document.querySelector(".date-Hamburg").innerHTML = dateHamburg;
        if (timeHamburg.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Hamburg"
            ).innerHTML = `00:${minuteHamburg}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Hamburg").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Hamburg").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Hamburg").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Hamburg").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeHamburg.substring(0, 2) >= 19 ||
                timeHamburg.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Hamburg").style.width =
                    "40px";
                document.querySelector(".weather-icon-Hamburg").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Hamburg").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Hamburg").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Hamburg").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Hamburg").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Hamburg"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(cologne)
    .then((resp) => resp.json())
    .then((data) => {
        let timeCologne = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteCologne = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            minute: "numeric",
        });
        let dateCologne = new Date().toLocaleString("en-US", {
            timeZone: "Europe/Paris",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Cologne").innerHTML = timeCologne;
        document.querySelector(".date-Cologne").innerHTML = dateCologne;
        if (timeCologne.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Cologne"
            ).innerHTML = `00:${minuteCologne}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Cologne").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Cologne").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Cologne").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Cologne").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeCologne.substring(0, 2) >= 19 ||
                timeCologne.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Cologne").style.width =
                    "40px";
                document.querySelector(".weather-icon-Cologne").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Cologne").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Cologne").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Cologne").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Cologne").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Cologne"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(tokyo)
    .then((resp) => resp.json())
    .then((data) => {
        let timeTokyo = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Tokyo",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteTokyo = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Tokyo",
            minute: "numeric",
        });
        let dateTokyo = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Tokyo",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Tokyo").innerHTML = timeTokyo;
        document.querySelector(".date-Tokyo").innerHTML = dateTokyo;
        if (timeTokyo.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Tokyo"
            ).innerHTML = `00:${minuteTokyo}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Tokyo").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Tokyo").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Tokyo").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Tokyo").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeTokyo.substring(0, 2) >= 19 ||
                timeTokyo.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Tokyo").style.width =
                    "40px";
                document.querySelector(".weather-icon-Tokyo").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Tokyo").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Tokyo").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Tokyo").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Tokyo").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Tokyo"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });

fetch(kyoto)
    .then((resp) => resp.json())
    .then((data) => {
        let timeKyoto = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Tokyo",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteKyoto = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Tokyo",
            minute: "numeric",
        });
        let dateKyoto = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Tokyo",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Kyoto").innerHTML = timeKyoto;
        document.querySelector(".date-Kyoto").innerHTML = dateKyoto;
        if (timeKyoto.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Kyoto"
            ).innerHTML = `00:${minuteKyoto}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Kyoto").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Kyoto").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Kyoto").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Kyoto").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeKyoto.substring(0, 2) >= 19 ||
                timeKyoto.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Kyoto").style.width =
                    "40px";
                document.querySelector(".weather-icon-Kyoto").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Kyoto").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Kyoto").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Kyoto").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Kyoto").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Kyoto"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(osaka)
    .then((resp) => resp.json())
    .then((data) => {
        let timeOsaka = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Tokyo",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteOsaka = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Tokyo",
            minute: "numeric",
        });
        let dateOsaka = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Tokyo",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Osaka").innerHTML = timeOsaka;
        document.querySelector(".date-Osaka").innerHTML = dateOsaka;
        if (timeOsaka.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Osaka"
            ).innerHTML = `00:${minuteOsaka}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Osaka").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Osaka").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Osaka").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Osaka").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeOsaka.substring(0, 2) >= 19 ||
                timeOsaka.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Osaka").style.width =
                    "40px";
                document.querySelector(".weather-icon-Osaka").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Osaka").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Osaka").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Osaka").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Osaka").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Osaka"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(kuala_lampur)
    .then((resp) => resp.json())
    .then((data) => {
        let timeKuala_Lumpur = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kuala_Lumpur",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteKuala_Lumpur = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kuala_Lumpur",
            minute: "numeric",
        });
        let dateKuala_Lumpur = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kuala_Lumpur",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Kuala-Lumpur").innerHTML =
            timeKuala_Lumpur;
        document.querySelector(".date-Kuala-Lumpur").innerHTML =
            dateKuala_Lumpur;
        if (timeKuala_Lumpur.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Kuala-Lumpur"
            ).innerHTML = `00:${minuteKuala_Lumpur}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Kuala-Lumpur").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Kuala-Lumpur").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Kuala-Lumpur").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Kuala-Lumpur").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeKuala_Lumpur.substring(0, 2) >= 19 ||
                timeKuala_Lumpur.substring(0, 2) <= 7
            ) {
                document.querySelector(
                    ".weather-icon-Kuala-Lumpur"
                ).style.width = "40px";
                document.querySelector(".weather-icon-Kuala-Lumpur").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Kuala-Lumpur").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Kuala-Lumpur").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Kuala-Lumpur").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Kuala-Lumpur"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Kuala-Lumpur"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(george_town)
    .then((resp) => resp.json())
    .then((data) => {
        let timeGeorgetown = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kuala_Lumpur",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteGeorgetown = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kuala_Lumpur",
            minute: "numeric",
        });
        let dateGeorgetown = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kuala_Lumpur",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Georgetown").innerHTML = timeGeorgetown;
        document.querySelector(".date-Georgetown").innerHTML = dateGeorgetown;
        if (timeGeorgetown.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Georgetown"
            ).innerHTML = `00:${minuteGeorgetown}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Georgetown").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Georgetown").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Georgetown").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Georgetown").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeGeorgetown.substring(0, 2) >= 19 ||
                timeGeorgetown.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Georgetown").style.width =
                    "40px";
                document.querySelector(".weather-icon-Georgetown").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Georgetown").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Georgetown").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Georgetown").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(
            ".tempreture-Georgetown"
        ).innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Georgetown"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });
fetch(malacca)
    .then((resp) => resp.json())
    .then((data) => {
        let timeMalacca = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kuala_Lumpur",
            timeStyle: "short",
            hourCycle: "h24",
        });
        let minuteMalacca = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kuala_Lumpur",
            minute: "numeric",
        });
        let dateMalacca = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kuala_Lumpur",
            dateStyle: "medium",
        });

        document.querySelector(".clock-Malacca").innerHTML = timeMalacca;
        document.querySelector(".date-Malacca").innerHTML = dateMalacca;
        if (timeMalacca.substring(0, 2) == 24) {
            document.querySelector(
                ".clock-Malacca"
            ).innerHTML = `00:${minuteMalacca}`;
        }
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon-Malacca").src =
                "./templates/img/weather-svg/cloudy.svg";
        }
        if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".weather-icon-Malacca").src =
                "./templates/img/weather-svg/thunderstorm.svg";
        }
        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon-Malacca").src =
                "./templates/img/weather-svg/mist.svg";
        }
        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon-Malacca").src =
                "./templates/img/weather-svg/drizzle.svg";
        }
        if (data.weather[0].main == "Clear") {
            if (
                timeMalacca.substring(0, 2) >= 19 ||
                timeMalacca.substring(0, 2) <= 7
            ) {
                document.querySelector(".weather-icon-Malacca").style.width =
                    "40px";
                document.querySelector(".weather-icon-Malacca").src =
                    "./templates/img/weather-svg/night-clear.svg";
            } else {
                document.querySelector(".weather-icon-Malacca").src =
                    "./templates/img/weather-svg/clear.svg";
            }
        }
        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon-Malacca").src =
                "./templates/img/weather-svg/rain.svg";
        }
        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon-Malacca").src =
                "./templates/img/weather-svg/snow.svg";
        }

        let celcius = Math.round(data.main.temp);
        document.querySelector(".tempreture-Malacca").innerHTML = `${celcius}°`;
        document.querySelector(
            ".city-Malacca"
        ).innerHTML = `${data.name}, ${data.sys.country}`;
    });

//btn- Load more--start

const activeCardCities = document.querySelectorAll("._active");
const btn = document.querySelector(".btn-block");
let loadMoreBtn = document.querySelector(".load-more-btn");

document.addEventListener("DOMContentLoaded", () => {
    if (activeCardCities.length > 6) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});
if (activeCardCities.length >= 7) {
    const sixCard = Array.from(activeCardCities).slice(6);
    sixCard.forEach((card) => {
        card.classList.remove("_active");
        card.classList.add("hidden");
    });
}
loadMoreBtn.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".weather-card");

    for (let i = currentItem; i < currentItem + 3; i++) {
        boxes[i].classList.remove("hidden");
        boxes[i].classList.add("_active");
    }

    currentItem += 3;
    if (
        currentItem == boxes.length - 2 ||
        currentItem == boxes.length - 1 ||
        currentItem == boxes.length
    ) {
        btn.style.display = "none";
    }
});
//oficies --start
const mySelect = document.querySelector(".form-select"),
    storesArticle = document.getElementsByClassName("stores-map");

mySelect.addEventListener("change", (e) => {
    if (e.target.value === "minsk") {
        document.querySelector(".content-store__title strong").innerHTML =
            "Minsk";
        document.querySelector(".contact__city").innerHTML =
            "Pushkin 32, Minsk, Belarus";
        document.querySelector(".contact__number").innerHTML = "+375821002554";
        document.querySelector(".contact__email").innerHTML = "lena21@mail.ru";
        document.querySelector(".picture-city").src =
            "https://www.exportchel.ru/sites/default/files/styles/preview_news/public/bc35422a89c53f16eb765d4883d26902_0.jpg?itok=CSfy19qs";
    }
    if (e.target.value === "moscow") {
        document.querySelector(".content-store__title strong").innerHTML =
            "Moscow";
        document.querySelector(".contact__city").innerHTML =
            "Prospekt Gagarina 3, Moscow, Russia";
        document.querySelector(".contact__number").innerHTML = "+75821002554";
        document.querySelector(".contact__email").innerHTML = "lera31@mail.ru";
        document.querySelector(".picture-city").src =
            "https://i.ytimg.com/vi/W5U5ts2SEfs/mqdefault.jpg";
    }
    if (e.target.value === "istanbul") {
        document.querySelector(".content-store__title strong").innerHTML =
            "Istanbul";
        document.querySelector(".contact__city").innerHTML =
            "Kalem str. 35, Kadikoy, Istanbul, Turkiye";
        document.querySelector(".contact__number").innerHTML = "+905821002554";
        document.querySelector(".contact__email").innerHTML = "lola.d@mail.ru";
        document.querySelector(".picture-city").src =
            "https://lh5.googleusercontent.com/p/AF1QipMRGfYYoUL3NdQU_ruPSjgmJuOYB15XBctYV8a3=w408-h272-k-no";
    }
});
//top__card__likes-start
const topCardsLike = document.querySelectorAll(".top__card-likes");

topCardsLike.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (el.children[0].classList.contains("liked")) {
            let num = +el.children[0].textContent;
            el.children[0].textContent = num - 1;
            el.children[0].classList.remove("liked");
        } else {
            let num = +el.children[0].textContent;
            el.children[0].textContent = num + 1;
            el.children[0].classList.add("liked");
        }
    });
});

// fixedHeader--- start

window.onscroll = function fixedHeader() {
    const header = document.querySelector(".header");
    if (window.pageYOffset > 70) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
};
