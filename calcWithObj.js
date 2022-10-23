
let operations = {
    add: "+",
    multi: "*",
    subtract: "-",
}
let answers = {
    notNumber: "Ошибка, введите число",
    notValid: "Неверный идентификатор, попробуйте снова",
}
let result;

function calc (identifier, a, b) {

    if (isValid(a, b)) {

            switch (identifier) {
                case operations.add:
                    result = a + b;
                    break;
                case operations.multi:
                    result = a * b;
                    break;
                case operations.subtract:
                    result = a - b;
                    break;
                default:
                    result = answers.notValid;
            }
        } else {
        result = answers.notNumber;
    }
}

    function isValid(a, b) {
        return (!isNaN(a) && !isNaN(b));
    }


calc (operations.add, 1, 2)
console.log(result);

calc (operations.multi, 1, 2)
console.log(result);

calc (operations.subtract, 3, 2)
console.log(result);

calc (operations.div, 3, 2)
console.log(result);

calc (operations.add, 3, "word")
console.log(result);