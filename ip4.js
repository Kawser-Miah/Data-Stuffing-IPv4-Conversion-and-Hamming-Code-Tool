let D2B = document.getElementById("D2B");
    let B2D = document.getElementById("B2D");

    D2B.addEventListener('click', e => {
        let IpInput = document.getElementById("IpInput").value;
        if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(IpInput)) {
            
            let octets = IpInput.split('.');

            if (octets.every(octet => parseInt(octet) >= 0 && parseInt(octet) <= 255)) {

                 let binaryOctets = octets.map(octet => {
                                 let binary = parseInt(octet, 10).toString(2);
                                 return '0'.repeat(8 - binary.length) + binary; // Ensure each binary representation has 8 bits
                             });

                             // Join the binary octets with dots to form the binary address
                             let binaryAddress = binaryOctets.join('.');

                             // Display the result
                             document.getElementById("IpOutput").textContent = binaryAddress;
                } else {
                    document.getElementById("IpOutput").textContent = "Invalid IPv4 Octet Range (0-255)";
                }

        } else {
            // Display an error message for invalid input
            document.getElementById("IpOutput").textContent = "Invalid IPv4 Decimal Address";
        }
    });

    B2D.addEventListener('click', e => {
        let IpInput = document.getElementById("IpInput").value;


        
        if (/^([01]{8}\.){3}[01]{8}$/.test(IpInput)) {
            try {
                let octets = IpInput.split('.');

                let decimalOctets = octets.map(octet => {
                    if (!/^[01]{8}$/.test(octet)) {
                        throw new Error(`Invalid binary octet: ${octet}`);
                    }
                    return parseInt(octet, 2);
                });

                let decimalAddress = decimalOctets.join('.');

                document.getElementById("IpOutput").textContent = decimalAddress;
            } catch (error) {
                document.getElementById("IpOutput").textContent = error.message;
            }
        } else {
            document.getElementById("IpOutput").textContent = "Invalid IPv4 Binary Address";
        }
    });
