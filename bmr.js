const calculateBtn = document.getElementById('calculate-btn');
        const weightInput = document.getElementById('weight');
        const heightInput = document.getElementById('height');
        const ageInput = document.getElementById('age');
        const genderSelect = document.getElementById('gender');
        const resultDiv = document.getElementById('result');

        calculateBtn.addEventListener('click', () => {
            const weight = parseFloat(weightInput.value);
            const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
            const age = parseInt(ageInput.value);
            const gender = genderSelect.value;

            if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
                resultDiv.innerHTML = '<p class="text-red-500">Please enter valid values.</p>';
                return;
            }

            let bmr;

            if (gender === 'male') {
                // Mifflin-St Jeor Equation for Males
                bmr = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age); 
            } else if (gender === 'female') {
                // Mifflin-St Jeor Equation for Females
                bmr = 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age); 
            }

            resultDiv.innerHTML = `<p>Your BMR is: ${bmr.toFixed(2)} calories</p>`;
        });