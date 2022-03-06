const textInput = document.querySelector('#name-input');
 
const textOutput = document.querySelector('#name-output');


textInput.addEventListener('input', ()=> {
    if (textInput.value==='') {
        textOutput.textContent='Anonymous'
    } else {
        textOutput.textContent=event.currentTarget.value
    }
});
// function onInput(event) {
//     console.log(event.currentTarget.value);
//     textOutput.textContent = event.currentTarget.value;
// }

