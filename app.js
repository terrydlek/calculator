document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstNumber = parseFloat(document.getElementById('first').value);
    const secondNumber = parseFloat(document.getElementById('second').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        switch (operation) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = secondNumber !== 0 ? firstNumber / secondNumber : 'Cannot divide by zero';
                break;
            default:
                result = '+, -, *, / 만 넣어주세요!';
        }
    } else {
        result = '숫자만 넣어주세요!';
    }

    document.getElementById('output').textContent = `결과: ${result}`;
});
