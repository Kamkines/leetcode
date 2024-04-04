var isValid = function(s) {
    let arrayTemp = []; // создаем пустой массив
    for (let c of s) { // цикл по каждому элементу
        if (c === '(' || c === '{' || c === '[') { // если элемент открывающий, то устанавливаем его в массив
            arrayTemp.push(c); 
        } else { // если закрывающий, то проверяем
            if (!arrayTemp.length || // переменная arrayTemp не пустая 
                (c === ')' && arrayTemp[arrayTemp.length - 1] !== '(') || // проверяем прошлый элемент в нашем созданном масиве, если он закрывающий или не подходящий, то сразу вовзаращем false
                (c === '}' && arrayTemp[arrayTemp.length - 1] !== '{') ||
                (c === ']' && arrayTemp[arrayTemp.length - 1] !== '[')) {
                return false; 
            }
            arrayTemp.pop(); // удаляем последний элемент из массива
        }
    }
    return !arrayTemp.length; 
};

// example

isValid("([)]")