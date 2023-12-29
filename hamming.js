let EP = document.getElementById("EP");
let OP = document.getElementById("OP");
let Output = document.getElementById("Output");
let userInput = document.getElementById("Input");

EP.addEventListener('click', () => {
    solve(userInput.value, 0);
});

OP.addEventListener('click', () => {
    solve(userInput.value, 1);
});

function hamCalc(position, c_l, code, initial) {
    let count = 0;
    let i = position - 1;

    while (i < c_l) {
        for (let j = i; j < i + position; j++) {
            if (code[j] === 1) {
                count++;
            }
        }
        i = i + 2 * position;
    }
if(initial === 0)
    return count % 2 === 0 ? 0 : 1;
   else if(initial === 1)
    return count % 2 === 0 ? 1 : 0;
}

function solve(input, initial) {
    let p_n = 0;
    let c_l;
    let j = 0;
    let k = 0;

    let i = 0;
    while (input.length > Math.pow(2, i) - (i + 1)) {
        p_n++;
        i++;
    }

    c_l = p_n + input.length;

    let code = new Array(c_l);

    for (i = 0; i < c_l; i++) {
        if (i === Math.pow(2, k) - 1) {
            code[i] = 0;
            k++;
        } else {
            code[i] = parseInt(input[j]);
            j++;
        }
    }

    for (i = 0; i < p_n; i++) {
        const position = Math.pow(2, i);
        const value = hamCalc(position, c_l, code, initial);
        code[position - 1] = value;
    }

    Output.innerHTML = "The Output Code is: " + code.join(' ');
}