function generateReport() {
    // Collect data from the input fields
    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    const attendance = document.getElementById('attendance').value;
    const age = document.getElementById('age').value;
    const roll = document.getElementById('roll').value;
    const averageAge = document.getElementById('average-age').value;
    const year = document.getElementById('year').value;
    const nextTerm = document.getElementById('next-term').value;

    // Display student details in the output section
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-class').textContent = className;
    document.getElementById('output-attendance').textContent = attendance;
    document.getElementById('output-age').textContent = age;
    document.getElementById('output-roll').textContent = roll;
    document.getElementById('output-averageAge').textContent = averageAge;
    document.getElementById('output-year').textContent = year;
    document.getElementById('output-nextTerm').textContent = nextTerm;

    // Function to handle radio button selections
    const handleRadioGroup = (groupName, outputId) => {
        const selectedOption = document.querySelector(`input[name='${groupName}']:checked`);
        if (selectedOption) {
            document.getElementById(outputId).textContent = selectedOption.value;
        } else {
            document.getElementById(outputId).textContent = '-';
        }
    };

    // Call handleRadioGroup for each assessment area
    handleRadioGroup('health1', 'health1-v');
    handleRadioGroup('health2', 'health2-v');
    handleRadioGroup('health3', 'health3-v');
    handleRadioGroup('health4', 'health4-v');
    handleRadioGroup('health5', 'health5-v');
    handleRadioGroup('emotional1', 'emotional1-v');
    handleRadioGroup('emotional2', 'emotional2-v');
    handleRadioGroup('emotional3', 'emotional3-v');
    handleRadioGroup('emotional4', 'emotional4-v');
    handleRadioGroup('emotional5', 'emotional5-v');
    handleRadioGroup('emotional6', 'emotional6-v');
    handleRadioGroup('emotional7', 'emotional7-v');
    handleRadioGroup('emotional8', 'emotional8-v');
    handleRadioGroup('emotional9', 'emotional9-v');
    handleRadioGroup('emotional10', 'emotional10-v');
    handleRadioGroup('emotional11', 'emotional11-v');
    handleRadioGroup('emotional12', 'emotional12-v');
    handleRadioGroup('emotional13', 'emotional13-v');
    handleRadioGroup('emotional14', 'emotional14-v');
    handleRadioGroup('emotional15', 'emotional15-v');
    handleRadioGroup('emotional16', 'emotional16-v');
    handleRadioGroup('emotional17', 'emotional17-v');
    handleRadioGroup('emotional18', 'emotional18-v');
    handleRadioGroup('emotional19', 'emotional19-v');
    handleRadioGroup('emotional20', 'emotional20-v');

    // Handle Promoted Section
    const promoted = document.querySelector('input[name="promoted"]:checked');
    document.getElementById('output-promoted').textContent = promoted ? promoted.value : 'Not Selected';

    // Handle Conduct, Interest, Teacher's remarks
    const conduct = document.querySelector('input[placeholder="Conduct"]').value;
    const interest = document.querySelector('input[placeholder="Interest"]').value;
    const classTeacherRemarks = document.querySelector('input[placeholder="Class Teacher Remarks"]').value;
    const headTeacherRemarks = document.querySelector('input[placeholder="Head Teacher Remarks"]').value;

    // Display remarks in the output section
    document.getElementById('output-conduct').textContent = conduct;
    document.getElementById('output-interest').textContent = interest;
    document.getElementById('output-classteacher-remarks').textContent = classTeacherRemarks;
    document.getElementById('output-headteacher-remarks').textContent = headTeacherRemarks;

    // Show the output section
    document.getElementById('output-section').style.display = 'block';
}

// Attach event listener to the "Generate Report" button
document.getElementById('generate-button').addEventListener('click', generateReport);
