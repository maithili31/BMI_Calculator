window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculatebmi)
}

function calculatebmi () {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result= document.querySelector('#result');

    if (!height || height < 0 || isNaN(height)) {
        result.innerText = "Please provide a valid height";
        return;
    } else if (!weight || weight < 0 || isNaN(weight)) {
        result.innerText = "Please provide a valid weight";
        return;
    }

    const bmi= (weight*10000)/(height*height).toFixed(2);

    if (bmi<18.50) {
        result.innerText = `Underweight : ${bmi}`;
    } else if (bmi>=18.50 && bmi<=24.99) {
        result.innerText = `Normal : ${bmi}`;
    } else if (bmi>=25 && bmi<=29.99) {
        result.innerText =`Over weight : ${bmi}`;
    } else if (bmi>=30 && bmi<=34.99) {
        result.innerText=`Obesity (class 1): ${bmi}`;
    } else if (bmi>=35 && bmi<=39.99) {
        result.innerText=`Obesity (class 2) : ${bmi}`;
    } else {
        result.innerText=`Extreme Obesity : ${bmi}`;
    }
}