let BS = document.getElementById("BS");
let BD = document.getElementById("BD");
let inputField = document.getElementById("Input");
let flagInput = document.getElementById("Flag");
let ESCInput = document.getElementById("ESC");


BS.addEventListener('click', e => {
    let flag = flagInput.value;
    let ESC = ESCInput.value;
    bitStuffing(inputField.value, flag, ESC);
});

BD.addEventListener('click', e => {
    let flag = flagInput.value;
    let ESC = ESCInput.value;
    deBitStuffing(inputField.value, flag, ESC);
});

function bitStuffing(input, flag, ESC) {
    let stuffedChars = "";

    for (let i = 0; i < input.length; i++) {
        let char = input.charAt(i);


        if (char === flag) {
            // If yes, stuff a special character before and after the delimiter
            stuffedChars += ESC; // Special character before the delimiter
            stuffedChars += flag;

        }
        else if (char === ESC) {
            stuffedChars += ESC;
            stuffedChars += ESC;
        } else {
            // If not, simply append the current character
            stuffedChars += char;
        }
    }
    // Display the result
    document.getElementById("Output").innerHTML = "Output Char (Stuffed): " + stuffedChars;
}

// The deBitStuffing function needs to be implemented for destuffing logic
function deBitStuffing(input, flag, ESC) {
    let destuffedChars = "";
    let escapeFlag = false;

    for (let i = 0; i < input.length; i++) {
        let char = input.charAt(i);

        if (escapeFlag) {
            // If we are in an escape sequence
            if (char === flag) {
                // If the next character is the delimiter, treat it as a single delimiter
                destuffedChars += flag;
            } else if (char === ESC) {
                // If the next character is also an escape character, treat it as a single escape character
                destuffedChars += ESC;
            } else {
                // Otherwise, it's an error or invalid case, handle it based on your requirements
                // For simplicity, you can choose to ignore the escape character in this case
                destuffedChars += ESC;
                destuffedChars += char;
            }

            escapeFlag = false; // Reset the escape flag
        } else {
            // If we are not in an escape sequence
            if (char === ESC) {
                // Set the escape flag to true, indicating that the next character should be treated specially
                escapeFlag = true;
            } else {
                // If not, simply append the current character
                destuffedChars += char;
            }
        }
    }

    // Display the result
    document.getElementById("Output").innerHTML = "Output Char (Destuffed): " + destuffedChars;
}

