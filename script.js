    const slider = document.getElementById('age');
    const output = document.getElementById('agevalue');

    // Update display when slider value changes
    slider.addEventListener('input', function () {
        output.textContent = slider.value;
    });