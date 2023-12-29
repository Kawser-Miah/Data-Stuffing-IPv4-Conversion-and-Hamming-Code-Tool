
var form = document.getElementById('convert');
var answer = document.getElementById('answer');

var weightType = 'Weight'; // Initial weight type

var b = document.getElementById('b');
var m = document.getElementById('m');
var weight = document.getElementById('weight');

// Event listener for button clicks
document.getElementById('b').addEventListener('click', switchToBMI);
document.getElementById('m').addEventListener('click', switchToWeight);

function switchToBMI() {

    weightType = 'Weight';
    weight.innerHTML = 'Weight';
    var kginput = document.getElementById('kg');
    kginput.setAttribute('placeholder', 'kg');
}
function switchToWeight() {
    weightType = 'BMI';
    weight.innerHTML = 'BMI';
    var kginput = document.getElementById('kg');
    kginput.setAttribute('placeholder', 'BMI');
}


document.addEventListener('keydown', function (event) {
    var key = event.code;
 

    if (key === 'KeyB') {
        switchToBMI();

    } else if (key === 'KeyM') {
        switchToWeight();
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var ft = parseFloat(document.getElementById('ft').value) || 0;
    var inch = parseFloat(document.getElementById('inch').value) || 0;
    var kg = parseFloat(document.getElementById('kg').value) || 0;
    var height = ((ft * 12 + inch) * 2.54) / 100;
    height = height * height;

    if (weightType === 'BMI') {
        var ans = kg * height;
        if (ans) {
            answer.innerHTML = 'The weight is: ' + ans.toFixed(2);
        } else {
            answer.innerHTML = 'Please enter values';
        }
    }
    
    
    else if (weightType === 'Weight') {
        var bmi = kg / height;
        if (bmi) {
            answer.innerHTML = 'The BMI is: ' + bmi.toFixed(2);
        } else {
            answer.innerHTML = 'Please enter values';
        }
    }
});
