const slidervalue = document.getElementById("age");
const agevalue = document.getElementById('agevalue');
const submit = document.getElementById('submit')
function updatedata(){
    agevalue.textContent = slidervalue.value;
}

slidervalue.addEventListener('input',updatedata);
updatedata();