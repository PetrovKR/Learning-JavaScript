function calc (identifier, a, b) {

    let result;

    if (isValid(a, b)) {
        if (identifier === "add") {
            result = a + b;
        } else if (identifier === "multi") {
            result = a * b;
        } else if (identifier === "subtract") {
            result = a - b;
        } else {
            result = "Неверный идентификатор, попробуйте снова";
        }
        return result;
    } else {
        return "Ошибка, введите число"
    }
}

function isValid(a, b) {
    return (!isNaN(a) && !isNaN(b));
}

console.log (calc ("add", 1, 2));
console.log (calc ("multi", 1, 2));
console.log (calc ("subtract", 3, 2));
console.log (calc ("div", 3, 2));
console.log (calc ("add", 3, "word"));