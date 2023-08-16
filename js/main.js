console.log('Raman is now live!');


let input = document.getElementById('answer-input');


function add(number) {
    if (input.value.length == 13) {
        input.value += "";
        alert('max digit length is 13...')
    } else {
        if (input.value == '00') {
            input.value = "";
            input.value += number;
        } else {
            input.value += number;
        }
    }
}

function clearAll() {
    input.value = '00';
}
function clearOne() {
    if (input.value.length != 1) {
        let asdf = input.value;
        let qwert = asdf.slice(0, -1);
        input.value = qwert;
    } else {
        input.value = '00';
    }
}

let evaluation = document.getElementById('equal');
evaluation.addEventListener('click', () => {
    try {
        let exp = input.value;
        let result = eval(exp);
        input.value = result;
    } catch (error) {
        alert('Something is wrong🤔🤔🤔');
        input.value = "00";
    }
})

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.background = 'brown';
        button.style.transform = 'translate(3px, 3px)';
        setTimeout(() => {
            button.style.background = 'rgba(0, 0, 0, 0)';
            button.style.transform = 'none';
        }, 200)
    })
})
