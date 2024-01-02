let D2B = document.getElementById("D2B");
    let B2D = document.getElementById("B2D");

    D2B.addEventListener('click', e => {
        let IpInput = document.getElementById("IpInput").value;
        if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(IpInput)) {
            
            let octets = IpInput.split('.');

            
            let binaryOctets = octets.map(octet => {
                let binary = parseInt(octet, 10).toString(2);
                return '0'.repeat(8 - binary.length) + binary; // Ensure each binary representation has 8 bits
            });

            // Join the binary octets with dots to form the binary address
            let binaryAddress = binaryOctets.join('.');

            // Display the result
            document.getElementById("IpOutput").textContent = binaryAddress;
        } else {
            // Display an error message for invalid input
            document.getElementById("IpOutput").textContent = "Invalid IPv4 Decimal Address";
        }
    });

    B2D.addEventListener('click', e => {
        let IpInput = document.getElementById("IpInput").value;


        
        if (/^(\d{8}\.){3}\d{8}$/.test(IpInput)) {
            // Split the binary address into an array of octets
            let octets = IpInput.split('.');

            // Convert each octet to decimal
            let decimalOctets = octets.map(octet => parseInt(octet, 2));

            // Join the decimal octets with dots to form the decimal address
            let decimalAddress = decimalOctets.join('.');

            // Display the result
            document.getElementById("IpOutput").textContent = decimalAddress;
        } else {
            // Display an error message for invalid input
            document.getElementById("IpOutput").textContent = "Invalid IPv4 Binary Address";
        }
    });
