const btnPassword = document.querySelector(".password");
const showHide = document.querySelector(".view-hide");
const allInputs = document.querySelectorAll("input");
const userName = document.querySelector(".user__name");

if (!(showHide == undefined)) {
    showHide.addEventListener("click", () => {
        if (btnPassword.classList.contains("show")) {
            btnPassword.type = "password";
            btnPassword.classList.remove("show");
            showHide.src = "../img/page-signIn/view.png";
        } else {
            btnPassword.type = "text";
            btnPassword.classList.add("show");
            showHide.src = "../img/page-signIn/hide.png";
        }
    });
} else {
    document.addEventListener("DOMContentLoaded", () => {
        const upper = userName.textContent[0].toUpperCase();
        const name = userName.textContent.substring(1);
        const result = `${upper}${name}`;
        userName.textContent = result;
    });
}

//Validate form- ---start

const patterns = {
    login: /^[a-z\d]{5,12}$/,
    password: /^[\w]{8,20}$/,
};
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add("valid");
        field.classList.remove("invalid");
    } else {
        field.classList.add("invalid");
        field.classList.remove("valid");
    }
}

allInputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});
