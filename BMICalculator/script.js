const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if ( height < 0 || isNaN(height)) {
        results.innerHTML = 'please give a valid height';
        return;
    }
    if (weight < 0 || isNaN(weight)) {
        results.innerHTML = 'please give a valid weight';
        return;
    }

    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    results.innerHTML = `${bmi}`;


    const div = document.createElement('div');
    div.style.color = 'white';
    div.style.fontSize = '40px';
    div.style.paddingLeft = '2px';

    if (bmi < 18.6) {
        div.innerHTML = 'under weight';
    } else if (bmi >= 18.6 && bmi < 24.9) {
        div.innerHTML = 'normal weight';
    } else {
        div.innerHTML = 'over weight';
    }
    results.appendChild(div);



})
