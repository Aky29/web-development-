const slidervalue = document.getElementById("age");
const agevalue = document.getElementById('agevalue');
const submit = document.getElementById('submit')
const button = document.querySelectorAll('.rbtn');
console.log(button);
function updatedata(){
    agevalue.textContent = slidervalue.value;
    let textsize = slidervalue.value +10;
    agevalue.style.fontSize = slidervalue.value +'px';
}
function colorchange(btn){
 if (btn.checked) document.body.style.backgroundColor = btn.value;
}

slidervalue.addEventListener('input',updatedata);
updatedata();

button.forEach(radio => radio.addEventListener('change',() => colorchange(radio)));