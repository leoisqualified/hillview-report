function generateReport() {
    // Get input values
    document.getElementById('display-name').innerText = document.getElementById('student-name').value;
    document.getElementById('display-age').innerText = document.getElementById('student-age').value;
    document.getElementById('display-class').innerText = document.getElementById('student-class').value;
    document.getElementById('display-average-age').innerText = document.getElementById('average-age').value;
    document.getElementById('display-attendance').innerText = document.getElementById('attendance').value;
    document.getElementById('display-term-begin').innerText = document.getElementById('term-begin').value;

    // Get assessment results
    document.getElementById('result-clean-clothes').innerText = getRadioValue('clean-clothes');
    document.getElementById('result-eats-tidy').innerText = getRadioValue('eats-tidy');

    // Get remarks
    document.getElementById('display-class-remarks').innerText = document.getElementById('class-remarks').value;
    document.getElementById('display-head-remarks').innerText = document.getElementById('head-remarks').value;

    // Hide input section, show report
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('output-section').style.display = 'block';
}

function getRadioValue(name) {
    const radios = document.getElementsByName(name);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return '';
}