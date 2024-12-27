
// bmi section 
const calculateBtn = document.getElementById('calculate-btn');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const genderSelect = document.getElementById('gender');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
    const gender = genderSelect.value;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = '<p class="text-red-500">Please enter valid weight and height.</p>';
        return;
    }

    const bmi = weight / (height * height);
    let bmiCategory = '';

    if (gender === 'male') {
        // Male BMI ranges
        if (bmi < 20.7) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 20.7 && bmi < 26.4) {
            bmiCategory = 'Normal';
        } else if (bmi >= 26.4 && bmi < 27.5) {
            bmiCategory = 'Overweight';
        } else {
            bmiCategory = 'Obese';
        }
    } else if (gender === 'female') {
        // Female BMI ranges
        if (bmi < 19.1) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 19.1 && bmi < 25.8) {
            bmiCategory = 'Normal';
        } else if (bmi >= 25.8 && bmi < 27.3) {
            bmiCategory = 'Overweight';
        } else {
            bmiCategory = 'Obese';
        }
    }

    resultDiv.innerHTML = `<p>Your BMI is: ${bmi.toFixed(2)}</p>`;
    resultDiv.innerHTML += `<p>Category: ${bmiCategory}</p>`;
});