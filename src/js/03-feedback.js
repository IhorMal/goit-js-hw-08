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

form.addEventListener('input', throttle(addLocalStorage, 500));

function addLocalStorage(e) {
    data[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

function populateTextarea() {
    let storagePars = localStorage.getItem("feedback-form-state");
   if (storagePars) {
       storagePars = JSON.parse(storagePars);
       Object.entries(storagePars).map(([name, value]) => {
           data[name] = value;
           form.elements[name].value = value;
       })
   }
}