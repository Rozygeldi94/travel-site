(function () {
    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    window.requestAnimationFrame = requestAnimationFrame;
})();

var flakes = [],
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    flakeCount = 400,
    mX = 100,
    mY = -100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],
            x = mX,
            y = mY,
            minDist = 150,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;
        } else {
            flake.velX *= 0.98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed;
            }
            flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
        }

        ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;

        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }

        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(snow);
}

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = Math.random() * 3 + 2;
    flake.speed = Math.random() * 1 + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = Math.random() * 0.5 + 0.3;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = Math.random() * 3 + 2,
            speed = Math.random() * 1 + 0.5,
            opacity = Math.random() * 0.5 + 0.3;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: Math.random() / 30,
            step: 0,
            opacity: opacity,
        });
    }

    snow();
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

init();

//Validation form-------------------start

const form = document.querySelector(".form"),
    formInputs = document.querySelectorAll(".form__input input"),
    checkbox = document.querySelector(".checkbox"),
    firstName = document.querySelector(".firstName"),
    lastName = document.querySelector(".lastName"),
    phoneNumber = document.querySelector(".phoneNumber"),
    email = document.querySelector(".email"),
    password = document.querySelector(".password"),
    confirmPassword = document.querySelector(".confirmPassword"),
    formBtn = document.querySelector(".form__btn");

//validation Password
const passwordAccept = document.querySelector(".password__accept");

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value.length != 0) {
        confirmPassword.classList.add("valid");
        if (password.value == confirmPassword.value) {
            passwordAccept.style.visibility = "visible";
            passwordAccept.src = "../img/accept.png";
            password.classList.remove("error");
            confirmPassword.classList.remove("error");
        } else {
            passwordAccept.style.visibility = "hidden";
            password.classList.add("error");
            confirmPassword.classList.add("error");
        }
    } else {
        if (confirmPassword.value.length == 0) {
            confirmPassword.classList.remove("valid");
        } else {
            confirmPassword.classList.add("valid");
        }
    }
});

password.addEventListener("input", () => {
    password.classList.add("valid");
    if (password.value.length != 0) {
        password.classList.add("valid");
        if (password.value == confirmPassword.value) {
            passwordAccept.style.visibility = "visible";
            passwordAccept.src = "../img/accept.png";
            password.classList.remove("error");
            confirmPassword.classList.remove("error");
        } else {
            passwordAccept.style.visibility = "hidden";
            password.classList.add("error");
            confirmPassword.classList.add("error");
        }
    } else {
        password.classList.remove("valid");
    }
});

form.addEventListener("click", (e) => {
    if (password.value.length == 0) {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        passwordAccept.style.visibility = "hidden";
    }
    if (confirmPassword.value.length == 0) {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        passwordAccept.style.visibility = "hidden";
    }
    if (!(e.target.id === "form__name")) {
        if (firstName.value.length == 0) {
            firstName.classList.remove("valid");
        }
    }
    if (!(e.target.id === "form__lastName")) {
        if (lastName.value.length == 0) {
            lastName.classList.remove("valid");
        }
    }
    if (!(e.target.id === "form__number")) {
        if (phoneNumber.value.length == 0) {
            phoneNumber.classList.remove("valid");
        }
    }
    if (!(e.target.id === "form__email")) {
        if (email.value.length == 0) {
            email.classList.remove("valid");
        }
    }
    if (!(e.target.id === "form__password-2")) {
        if (confirmPassword.value.length == 0) {
            confirmPassword.classList.remove("valid");
        }
    }
    if (!(e.target.id === "form__password")) {
        if (password.value.length == 0) {
            password.classList.remove("valid");
        }
    }
});

//end Validation Passwords
function validateName(name) {
    const re = /^[a-zA-ZА-Яа-яёЁ]+$/;
    return re.test(String(name));
}
function validateEmail(email) {
    let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}
formInputs.forEach((input) => {
    input.addEventListener("click", () => {
        input.classList.add("valid");
    });
});

form.onsubmit = function (e) {
    let emailVal = email.value,
        firstNameVal = firstName.value,
        lastNameVal = lastName.value,
        phoneVal = phoneNumber.value,
        firstNameAccept = document.querySelector(".firstName__accept"),
        lastNameAccept = document.querySelector(".lastName__accept"),
        emailAccept = document.querySelector(".email__accept"),
        phoneNumberAccept = document.querySelector(".phoneNumber__accept"),
        checkboxAccept = document.querySelector(".checkbox__accept"),
        emptyInputs = Array.from(formInputs).filter(
            (input) => input.value === ""
        );
    if (!validateName(firstNameVal)) {
        e.preventDefault();
        firstNameAccept.style.visibility = "visible";
        firstNameAccept.src = "../img/error.png";
    } else {
        firstNameAccept.style.visibility = "hidden";
    }
    if (!validateName(lastNameVal)) {
        e.preventDefault();
        lastNameAccept.style.visibility = "visible";
        lastNameAccept.src = "../img/error.png";
    } else {
        lastNameAccept.style.visibility = "hidden";
    }
    if (!validateEmail(emailVal)) {
        e.preventDefault();
        emailAccept.style.visibility = "visible";
        emailAccept.src = "../img/error.png";
    } else {
        emailAccept.style.visibility = "hidden";
    }

    if (!validatePhone(phoneVal)) {
        e.preventDefault();
        phoneNumberAccept.style.visibility = "visible";
        phoneNumberAccept.src = "../img/error.png";
    } else {
        phoneNumberAccept.style.visibility = "hidden";
    }
    if (!(password.value == confirmPassword.value)) {
        e.preventDefault();
        passwordAccept.style.visibility = "visible";
        passwordAccept.src = "../img/error.png";
    } else {
        passwordAccept.src = "../img/accept.png";
    }
    if (!checkbox.checked) {
        e.preventDefault();
        checkboxAccept.style.visibility = "visible";
        checkboxAccept.src = "../img/error.png";
    } else {
        checkboxAccept.style.visibility = "hidden";
    }
};
let form3 = document.querySelector(".form");
let dd = document.querySelectorAll(".form__input");

form3.addEventListener("click", function (e) {
    if (e.target.closest(".form__input")) {
        console.log("form input");
    }
    if (e.target.closest(".aygul")) {
        console.log("form bottom");
    }
    if (e.target.closest(".form__btn")) {
        console.log("form btn");
    }
    if (e.target.tagName == "FORM") {
        console.log("form");
    }
});
