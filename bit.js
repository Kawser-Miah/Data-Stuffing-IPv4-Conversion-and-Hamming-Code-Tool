let BS = document.getElementById("BS");
        let BD = document.getElementById("BD");
        let inputField = document.getElementById("Input");
        let Range = document.getElementById("Range").value;

        BS.addEventListener('click', e => {
            let Range = document.getElementById("Range").value;
e.preventDefault();
            bitStuffing(inputField.value, Range);
        });

        BD.addEventListener('click', e => {
            let Range = document.getElementById("Range").value;
e.preventDefault();
            deBitStuffing(inputField.value, Range);
        });

        function bitStuffing(input, Range) {
            let stuffedBits = "";

            // Count consecutive 1s
            let count = 0;

            for (let i = 0; i < input.length; i++) {
                let bit = input.charAt(i);

                // Append the current bit
                stuffedBits += bit;

                if (bit === '1') {
                    count++;

                    // Check if five consecutive 1s are encountered
                    if (count == Range) {
                        stuffedBits += '0'; // Stuff a '0' bit
                        count = 0; // Reset the count
                    }
                } else {
                    count = 0; // Reset s count if '0' is encountered
                }
            }

            // Display the result
            document.getElementById("Output").innerHTML = "Output Bits: " + stuffedBits;
        }

        function deBitStuffing(input, Range) {
            let stuffedBits = "";

            // Count consecutive 1s
            let count = 0;

            for (let i = 0; i < input.length; i++) {
                let bit = input.charAt(i);

                // Append the current bit
                stuffedBits += bit;
                if (bit === '1') {
                    count++;

                    // Check if five consecutive 1s are encountered
                    if (count == Range && input.charAt(i+1)==='0') {
                        i++;
                        count = 0; // Reset the count
                    }
                } else {
                    count = 0; // Reset count if '0' is encountered
                }
              
            }

            // Display the result
            document.getElementById("Output").innerHTML = "Output Bits: " + stuffedBits;
        }