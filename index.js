function generateReport() {
    // Collect data from input tags in student details section
    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    const attendance = document.getElementById('attendance').value;
    const age = document.getElementById('age').value;
    const roll = document.getElementById('roll').value;
    const averageAge = document.getElementById('average-age').value;
    const year = document.getElementById('year').value;
    const nextTerm = document.getElementById('next-term').value;

    // Display student details in output-section
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-class').textContent = className;
    document.getElementById('output-attendance').textContent = attendance;
    document.getElementById('output-age').textContent = age;
    document.getElementById('output-roll').textContent = roll;
    document.getElementById('output-averageAge').textContent = averageAge;
    document.getElementById('output-year').textContent = year;
    document.getElementById('output-nextTerm').textContent = nextTerm;
    
    // Function to clear table selections
    const clearColumns = (idPrefix) => {
        document.getElementById(`${idPrefix}-v`).textContent = '';
        document.getElementById(`${idPrefix}-g`).textContent = '';
        document.getElementById(`${idPrefix}-n`).textContent = '';
    };

    // Function to handleRadioButton selections
    const handleRadioButtonGroup = (name, idPrefix) => {
        const selected = document.querySelector(`input[name='${name}']:checked`);
        clearColumns(idPrefix); // Clear previous selections
        
        if (selected) {
            if (selected.value === 'V')  {
                document.getElementById(`${idPrefix}-v`).textContent = 'V'
            }

            else if(selected.value === 'G') {
                document.getElementById(`${idPrefix}-g`).textContent = 'G'
            }

            else if(selected.value === 'N') {
                document.getElementById(`${idPrefix}-n`).textContent = 'N'
            }
        };
    }

    // Call handleRadioSelection Function for each assessment area
    handleRadioButtonGroup('health1', 'output-health1')
    handleRadioButtonGroup('health2', 'output-health2')
    handleRadioButtonGroup('health3', 'output-health3')
    handleRadioButtonGroup('health4', 'output-health4')
    handleRadioButtonGroup('health5', 'output-health5')
    handleRadioButtonGroup('emotional1','output-emotional1')
    handleRadioButtonGroup('emotional2','output-emotional2')
    handleRadioButtonGroup('emotional3','output-emotional3')
    handleRadioButtonGroup('emotional4','output-emotional4')
    handleRadioButtonGroup('emotional5','output-emotional5')
    handleRadioButtonGroup('emotional6','output-emotional6')
    handleRadioButtonGroup('emotional7','output-emotional7')
    handleRadioButtonGroup('emotional8','output-emotional8')
    handleRadioButtonGroup('emotional9','output-emotional9')
    handleRadioButtonGroup('emotional10','output-emotional10')
    handleRadioButtonGroup('emotional11','output-emotional11')
    handleRadioButtonGroup('emotional12','output-emotional12')
    handleRadioButtonGroup('emotional13','output-emotional13')
    handleRadioButtonGroup('emotional14','output-emotional14')
    handleRadioButtonGroup('emotional15','output-emotional15')
    handleRadioButtonGroup('emotional16','output-emotional16')
    handleRadioButtonGroup('emotional17','output-emotional17')
    handleRadioButtonGroup('emotional18','output-emotional18')
    handleRadioButtonGroup('emotional19','output-emotional19')
    handleRadioButtonGroup('emotional20','output-emotional20')
    
    // Update Promoted button value in output section
    const updatePromoteButton = () => {
        const promoted = document.querySelector('input[name="promoted"]:checked');
        const outputPromoted = document.getElementById('output-promoted');

        if (promoted) {
            outputPromoted.textContent = promoted.value;
        } else {
            outputPromoted.textContent = 'Not Selected';
        }
    }

    // Update promoted button in the output section
    updatePromoteButton();

    // Make the output section visible
    document.getElementById('output-section').style.display = 'block';

    document.querySelector('generate-button').addEventListener('click', generateReport);
}        
