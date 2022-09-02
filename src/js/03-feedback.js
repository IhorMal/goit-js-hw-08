import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')
const data = {}

populateTextarea()

form.addEventListener('submit', resetForm);

function resetForm(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}

form.addEventListener('input', throttle(addLocalStorage, 300));

function addLocalStorage(e) {
    data[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

function populateTextarea() {
    const storagePars = JSON.parse(localStorage.getItem("feedback-form-state"));
   if (storagePars === null) {
    return;
   }
    
    form.elements.email.value = storagePars.email || '';
    form.elements.message.value = storagePars.message || '';
}