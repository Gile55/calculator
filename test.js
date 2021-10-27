function Zbroji() {
    let a = +document.getElementById('first').value;
    let b = +document.getElementById('second').value;
    let paragraph = document.getElementById('ab');

    paragraph.textContent = a + b;
}

function Multiply() {
    let a = +document.getElementById('first').value;
    let b = +document.getElementById('second').value;
    let paragraph = document.getElementById('ab');
    paragraph.textContent = a * b
}

function Divide () {
    let a = +document.getElementById('first').value;
    let b = +document.getElementById('second').value;
    let paragraph = document.getElementById('ab');
    paragraph.textContent = a / b
}

function Oduzmi () {
    let a = +document.getElementById('first').value;
    let b = +document.getElementById('second').value;
    let paragraph = document.getElementById('ab');
    paragraph.textContent = a - b
}

