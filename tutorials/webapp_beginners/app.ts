// GitHub Repo: https://github.com/codeinpiece/typescript-tutorials
// YouTube Channel: https://www.youtube.com/@codeinpieces
// YouTube Video Link: https://youtu.be/J2kUg78Lf4o

// Topic: Beginners Understanding on Web Apps using HTML and typescript.

const number1 = document.getElementById("num1") as HTMLInputElement
const printButton = document.getElementById("printBtn") as HTMLButtonElement
const printValue = document.getElementById("enteredNumber") as HTMLOutputElement

function printEnteredValue(): void{
    const numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();

}

printButton.addEventListener("click", printEnteredValue);