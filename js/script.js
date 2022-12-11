const formEl = document.querySelector('#form');
const inputEl = formEl.querySelector('#input');
const messageEL = document.querySelector('.invalid-feedback');

const validateForm = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEl.value))
    {
        messageEL.classList.remove("error");
        messageEL.classList.add("none");
        inputEl.style.border = "2px solid limegreen"
        setTimeout(()=> { inputEl.value = "";inputEl.style.border = "none" }, 2000)
    } else {
        messageEL.classList.add("error");
        messageEL.classList.remove("none");
        inputEl.style.border = "2px solid red"
    }
};

formEl.addEventListener("submit", (e)=> {
    e.preventDefault();
    validateForm()
});


